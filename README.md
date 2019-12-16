# Figma-Plugin-Webpack-React-Template
Base for building Figma API plugins with UI on React.

![Plugin Screenshot](https://i.imgur.com/mE8fKnG.png)

Webpack in this template actually works with React and inlines images into the bundle correctly unlike the one you can make by following step-by-step guide from the official Figma API doc manual.

Don't forget to update your `manifest.json` to change the name and id of your plugin.

Bundling is set as usual in `package.json`.

First:
```
npm install
```
Then make your stuff and run webpack scripts.

For dev build:
```
npm run start
```

For production build:
```
npm run build
```
