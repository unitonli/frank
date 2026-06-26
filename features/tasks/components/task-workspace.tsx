import { WandSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FrankResponsePanel } from "@/features/tasks/components/frank-response-panel";
import { UploadDropzone } from "@/features/tasks/components/upload-dropzone";

export function TaskWorkspace() {
  return (
    <div className="mx-auto max-w-5xl">
      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-white/70">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <CardTitle>Новая задача</CardTitle>
              <CardDescription className="mt-2">
                Загрузите ТЗ, чтобы подготовить будущий HTML + CSS макет.
              </CardDescription>
            </div>
            <div className="rounded-md border bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
              MVP v0.1
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 p-5 md:p-6">
          <UploadDropzone />
          <FrankResponsePanel />
        </CardContent>

        <CardFooter className="justify-end border-t bg-white/70 p-5 md:p-6">
          <Button type="button">
            <WandSparkles className="h-4 w-4" aria-hidden="true" />
            Анализировать
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
