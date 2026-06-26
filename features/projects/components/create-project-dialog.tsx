import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createProjectAction } from "@/features/projects/actions";

export function CreateProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button">
          <Plus className="h-4 w-4" aria-hidden="true" />
          Создать проект
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Новый проект</DialogTitle>
          <DialogDescription>
            FRANK создаст отдельное рабочее пространство с документацией, ТЗ,
            паттернами и результатами генерации.
          </DialogDescription>
        </DialogHeader>

        <form action={createProjectAction} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold" htmlFor="projectName">
              Название проекта
            </label>
            <Input id="projectName" name="name" placeholder="Synerget" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold" htmlFor="projectDescription">
              Описание
            </label>
            <Textarea
              id="projectDescription"
              name="description"
              placeholder="Необязательное описание проекта"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Создать</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
