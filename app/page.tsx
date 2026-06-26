import { AppShell } from "@/components/layout/app-shell";
import { ProjectsPage } from "@/features/projects/components/projects-page";
import { WorkspaceSetup } from "@/features/projects/components/workspace-setup";
import { TaskWorkspace } from "@/features/tasks/components/task-workspace";
import { getWorkspaceState } from "@/lib/workspace/projects";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: Promise<{
    project?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const state = await getWorkspaceState();

  if (!state.workspacePath) {
    return <WorkspaceSetup />;
  }

  const params = await searchParams;
  const selectedProject = state.projects.find((project) => project.id === params.project);

  if (!selectedProject) {
    return (
      <ProjectsPage projects={state.projects} workspacePath={state.workspacePath} />
    );
  }

  return (
    <AppShell projectName={selectedProject.name}>
      <TaskWorkspace />
    </AppShell>
  );
}
