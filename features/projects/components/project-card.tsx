import { Clock3, FolderKanban } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { openProjectAction } from "@/features/projects/actions";
import type { ProjectMetadata } from "@/types/workspace";

interface ProjectCardProps {
  project: ProjectMetadata;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex min-h-64 flex-col overflow-hidden">
      <CardHeader className="flex-1 border-b bg-white/72">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <FolderKanban className="h-5 w-5" aria-hidden="true" />
        </div>
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <CardDescription className="mt-2 min-h-12 leading-6">
          {project.description || "Описание пока не добавлено."}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3 className="h-4 w-4" aria-hidden="true" />
          {formatLastOpened(project.lastOpenedAt)}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <form action={openProjectAction} className="w-full">
          <input name="projectId" type="hidden" value={project.id} />
          <Button className="w-full" type="submit" variant="outline">
            Открыть проект
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

function formatLastOpened(lastOpenedAt: string | null) {
  if (!lastOpenedAt) {
    return "Еще не открывался";
  }

  return `Последнее открытие: ${new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(lastOpenedAt))}`;
}
