# Expo 54 — always check latest docs

Read https://docs.expo.dev/versions/v54.0.0/ before writing code.

## Commands

- `npx expo start` — dev server (or `npm start` as alias)
- `npx expo start --ios` / `npx expo start --android` / `npx expo start --web`

No lint, typecheck, or test scripts exist.

## Architecture

- **Expo Router** (file-based routing) — entry is `expo-router/entry` (set in `package.json:main`).
- **React 19.2**, **React Native 0.81.5**, **Expo 54**, **New Arch** enabled.
- **Appwrite** backend via `react-native-appwrite` — client configured in `lib/appwrite.js` (project `6a0df22c000d5420caa2`, platform `com.shelfie.app`).
- Deep link scheme: `shelfieapp://`.

### Routing structure

```
app/
  _layout.jsx           — root Stack layout (headerShown: false on group screens)
  index.jsx             — home screen with links to /login, /register, /profile
  about.jsx
  contact.jsx
  (auth)/
    _layout.jsx         — Stack (headerShown: false, animation: "none")
    login.jsx
    register.jsx
  (dashboard)/
    _layout.jsx         — Tabs layout (Profile, Books, Create)
    profile.jsx
    books.jsx
    create.jsx
```

### Components (`components/`)

All JSX, no TypeScript. Themed components accept `useColorScheme` values from `Colors` in `constants/colors.js`:

| Component | Props | Notes |
|---|---|---|
| `ThemedView` | `style`, `safe` (boolean) | `safe=true` applies safe-area insets |
| `ThemedText` | `style`, `title` (boolean) | `title=true` uses `theme.title` color |
| `ThemedButton` | `style` + Pressable props | Uses `Colors.primary` background |
| `ThemedCard` | `...props` | **Bug**: destructured incorrectly — `(style, ...props)` instead of `({style, ...props})` |
| `ThemedLogo` | Image props | Switches logo based on color scheme |
| `Spacer` | `width` (default `"100%"`), `height` (default `40`) | Empty View spacer |

### Backend

- `lib/appwrite.js` — exports `account` and `avatars` from Appwrite client.
- Endpoint is commented out (`https://fra.cloud.appwrite.io/v1`); only project ID and platform are set.

### Styling conventions

- `Colors.primary` (#6849a7) and `Colors.warning` (#cc475a) are static; dark/light keys are nested.
- All files use JSX, `.jsx` extension, no TypeScript.
- `StyleSheet.create()` at bottom of file.