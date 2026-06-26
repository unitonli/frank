export function FrankResponsePanel() {
  return (
    <section className="min-h-72 rounded-lg border bg-white p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">Ответ FRANK</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Здесь появится HTML + CSS макет после анализа.
          </p>
        </div>
        <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
          Draft
        </span>
      </div>

      <div className="flex min-h-44 items-center justify-center rounded-md bg-muted/45 px-4 text-center text-sm text-muted-foreground">
        Результат пока пустой
      </div>
    </section>
  );
}
