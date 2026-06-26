import { UploadCloud } from "lucide-react";

export function UploadDropzone() {
  return (
    <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-muted/35 px-6 py-8 text-center transition-colors hover:bg-muted/55">
      <input
        accept=".doc,.docx,.md,.pdf,.txt"
        aria-label="Загрузить техническое задание"
        className="sr-only"
        type="file"
      />
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border bg-white">
        <UploadCloud className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold">Загрузите ТЗ</p>
      <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
        Перетащите файл или выберите документ с описанием страницы.
      </p>
    </label>
  );
}
