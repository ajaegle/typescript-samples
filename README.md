# TypeScript Samples

This repository provides sample projects for applications built with TypeScript.

## Slides

These code samples have initially been created for the talk "TypeScript - the better JavaScript?" given at GDG DevFest Karlsruhe 2015.

The slides for the corresponding presentation can be found at [Google Docs](https://docs.google.com/presentation/d/17GTEUJOV-dJRBRyr2TPWRHHq1uwt1fVae6cB1ZfMEgg/pub?start=false&loop=false&delayms=3000) or as exported [PDF](./slides.pdf) in this repository.

## Projects listed in this repository

01_intro holds some JavaScript code samples that have intended bugs which cannot be spotted by your IDE.

02_features holds all code samples shown during the presentation and also addresses some further topics.

03_jquery is a minimal setup for a TypeScript project using jquery via npm together with type definitions.

04_nodejs shows how to use TypeScript together with nodejs. The application uses the ES2015 module syntax and produces commonjs modules as required for node. The demo shows how to integrate node modules and how to reference own modules.

05_react uses the jsx feature of TypeScript to translate jsx into regular JavaScript. This project uses the global React object. Sample 07 provides some better approach using modules.

06_webpack-jquery uses the webpack system to bundle a jquery application. A livereload plugin handles reloads as soon as some code is changed.

07_jspm-react integrates the react setup with jspm module loader. Here, no global React object is needed as the required dependencies are imported explicitly.

## Contact

If something isn't working for you or some of the samples require more documentation, please ping me here or twitter [@ajaegle](https://twitter.com/ajaegle).
