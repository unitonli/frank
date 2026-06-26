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

## Workspace

On first launch FRANK asks for a Workspace folder. This folder is outside the repository and stores all user data.

Each project is created with this structure:

```text
Workspace/
  Project Name/
    docs/
    tz/
    ui/
    ux/
    patterns/
    output/
    project.json
```

The Workspace path is saved in the user's local system folder at `~/.frank/config.json`.

## Architecture

- `app/` contains the App Router entry points and global styles.
- `components/layout/` contains application shell elements such as Sidebar and Header.
- `components/ui/` contains reusable shadcn/ui style primitives.
- `features/projects/` contains Workspace setup, project list, project creation, and project opening actions.
- `features/tasks/` contains the first product feature: task upload and FRANK response workspace.
- `lib/workspace/` contains filesystem access for Workspace and project metadata.
- `lib/` contains shared utilities.
- `types/` contains shared TypeScript contracts for future domain entities.
- `public/` is reserved for static assets.
