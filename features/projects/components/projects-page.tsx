import { FolderPlus } from "lucide-react";

import { CreateProjectDialog } from "@/features/projects/components/create-project-dialog";
import { ProjectCard } from "@/features/projects/components/project-card";
import type { ProjectMetadata } from "@/types/workspace";

interface ProjectsPageProps {
  projects: ProjectMetadata[];
  workspacePath: string;
}

export function ProjectsPage({ projects, workspacePath }: ProjectsPageProps) {
  return (
    <main className="workspace-grid min-h-screen bg-background px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">FRANK</p>
            <h1 className="text-3xl font-semibold tracking-normal">Проекты</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Workspace: <span className="font-medium text-foreground">{workspacePath}</span>
            </p>
          </div>

          <CreateProjectDialog />
        </header>

        {projects.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-96 flex-col items-center justify-center rounded-lg border bg-white/72 px-6 text-center shadow-soft">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
              <FolderPlus className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold">Пока нет проектов</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Создайте первый проект, и FRANK подготовит для него отдельную
              структуру папок внутри Workspace.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
