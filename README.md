# polychrome UI

Scss and svelte component libary for desctop and web applications

## Contents

- Svelte components for native window elements and common ui elements
- Scss styles for macOS, Windows and for website usage
- Icon libary with svg's for different usecases
- Vite plugin to build icons into public folder
- Font files

## Usage

Add polychrome UI as submodule to your project in the src directory
```
git submodule add https://github.com/fynn-g/pureUI.git
```
Add `pureIcons.config.json` to the root dir of the project. In an array you can specify witch icon categorys to include

```
{
    "folders": [
        "tool_bar",
        "settings_tabs",
        "native"
    ]
}
```
Include the plugin into the vite plugin section in `vite.config.ts`

```
import { processIcons } from "./src/pureUI/modules/pureIconPlugin";
```

```
plugins: [
    {
        name: "pureIcons pull",
        buildStart(options) {
            if (command === "serve") return;
            processIcons();
        },
    },
]
```

Run the Vite build process to bundle icons to pulbic folder
```
pnpm vite build
```
