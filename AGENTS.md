# Shelfie App Agent Guide

Read Expo SDK 54 docs before implementation work:
<https://docs.expo.dev/versions/v54.0.0/>

## Fast Start

- `npx expo start` — dev server (or `npm start` as alias)
- `npx expo start --ios` / `npx expo start --android` / `npx expo start --web`

No lint, typecheck, or test scripts exist.

## Stack and Entry

- Expo Router app, entrypoint is `expo-router/entry` (`package.json` -> `main`).
- Expo 54, React Native 0.81.5, React 19.
- Deep link scheme in `app.json`: `shelfieapp://`.

## Routing Structure

Use file-based routes under `app/`:

- `app/_layout.tsx`: root stack and global providers.
- `app/(auth)/`: auth flow (`login.tsx`, `register.tsx`).
- `app/(dashboard)/`: tab flow (`profile.tsx`, `books.tsx`, `create.tsx`).
- `app/index.tsx`, `app/about.tsx`, `app/contact.tsx`: public screens.

When adding screens, preserve group boundaries (`(auth)`, `(dashboard)`) and layout ownership.

## State and Backend

- User state is managed by `src/context/UserContext.tsx` and consumed via `hooks/useUser.tsx`.
- Appwrite client is in `src/appwrite.ts`.
- Appwrite endpoint is currently commented out; project and platform are set in code.

## UI and Styling Conventions

- This repo is mostly TypeScript (`.ts`/`.tsx`) with a small amount of legacy JSX in `components/`.
- Theme values come from `constants/colors.ts` through `src/theme/useTheme.ts`.
- Prefer existing themed primitives (`ThemedView`, `ThemedText`, `ThemedButton`, `ThemedTextInput`) before introducing new base wrappers.
- Keep styles colocated and defined via `StyleSheet.create`.

## Known Pitfalls

- `components/ThemedCard.jsx` has a prop destructuring bug (`(style, ...props)`); do not copy that pattern.
- Existing docs may mention `lib/appwrite.js`; the active file is `src/appwrite.ts`.

## Agent Working Rules

- Keep changes minimal and scoped; avoid broad refactors unless requested.
- Match nearby file conventions (naming, hooks usage, style organization).
- Prefer editing existing themed components/screens over duplicating UI patterns.
