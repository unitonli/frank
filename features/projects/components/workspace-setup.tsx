import { FolderOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { configureWorkspace } from "@/features/projects/actions";

export function WorkspaceSetup() {
  return (
    <main className="workspace-grid flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-xl overflow-hidden">
        <CardHeader className="border-b bg-white/72">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <FolderOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle>Выберите Workspace</CardTitle>
          <CardDescription className="mt-2">
            FRANK будет хранить проекты в локальной папке вне репозитория.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <form action={configureWorkspace} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold" htmlFor="workspacePath">
                Путь к папке
              </label>
              <Input
                id="workspacePath"
                name="workspacePath"
                placeholder="C:\\Users\\User\\Documents\\FRANK"
                required
              />
            </div>

            <div className="rounded-lg border bg-muted/35 px-4 py-3 text-sm leading-6 text-muted-foreground">
              Например: <span className="font-medium text-foreground">D:\FRANK Projects</span>
            </div>

            <Button className="w-full" type="submit">
              Создать Workspace
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
