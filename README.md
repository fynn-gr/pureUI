# pureUI

Scss and svelte component libary for desktop and web applications

## Contents

- Svelte components for native window elements and common ui elements
- Scss styles for macOS, Windows and for website usage
- Icon libary with svg's
- Vite plugin to build icons
- Font files

## Usage

Add pureUI as submodule to your project in the src directory

```
git submodule add https://github.com/fynn-g/pureUI.git
```

Add `pureIcons.config.json` to the root dir of the project. In an array you can specify witch icon categorys to include

```
{
    "folders": [
        "topbar",
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
