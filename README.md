# FRANK v0.1

FRANK is a local AI tool for product designers. The MVP goal is to turn a task description into a ready HTML + CSS page mockup.

FRANK does not integrate with Figma and stops after generating HTML + CSS.

## Stack

- Next.js 15 App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui style components

## Run

```bash
npm install
npm run dev
```

## Architecture

- `app/` contains the App Router entry points and global styles.
- `components/layout/` contains application shell elements such as Sidebar and Header.
- `components/ui/` contains reusable shadcn/ui style primitives.
- `features/tasks/` contains the first product feature: task upload and FRANK response workspace.
- `lib/` contains shared utilities.
- `types/` contains shared TypeScript contracts for future domain entities.
- `public/` is reserved for static assets.
