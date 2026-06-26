import { AppShell } from "@/components/layout/app-shell";
import { TaskWorkspace } from "@/features/tasks/components/task-workspace";

export default function Home() {
  return (
    <AppShell>
      <TaskWorkspace />
    </AppShell>
  );
}
