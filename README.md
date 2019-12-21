# Figma-Plugin-Webpack-React-Template
Base for building Figma API plugins with UI on React.

![Plugin Screenshot](https://i.imgur.com/mE8fKnG.png)

Webpack in this template actually works with React and inlines images into the bundle correctly unlike the buggy one you can make by following step-by-step guide from the official Figma API doc manual.

Don't forget to update your `manifest.json` to change the name and id of your plugin and to load it into Figma's plugin interface.

Bundling is set as usual in `package.json`.

First:
```
npm install
```
Then make your stuff and run webpack scripts.

For dev build (doesn't track changes yet, for now you should build with the command every time):
```
npm run start
```

For production build:
```
npm run build
```

`code.ts` is the sandbox for plugin code in TypeScript.

`ui.js` is the entry point for UI on React or any other JS code.

You can set the project's UI to be made in TypeScript also by providing `ui.tsx` instead of `ui.js`. In that case don't forget to change the ui entry point in `webpack.config.js` accordingly. `tsconfig` is already set to compile React code and Webpack's `ts-loader` is also set in config.

`url-loader` is set to work with `.svg` and `.png` only. Keep in mind that you should manually add your required file types and set the limit for you purposes in `webpack.config.js`.
