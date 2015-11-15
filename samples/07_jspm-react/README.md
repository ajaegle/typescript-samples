# React/JSPM/TypeScript Sample

This is a sample project demoing how to use some third party library like reactjs via jspm together with TypeScript.

## Running

To get this sample up and running, execute the following commands:

```
npm install tsd typescript serve -g

npm install
tsd install
jspm install

tsc
serve
```

Browser the site at localhost:3000

## What to do for such a setup?

To setup such a project on your own, the following commands are required:

```
npm install tsd typescript serve -g

npm init
npm install jspm --save-dev
```

When initalizing the jspm setup, please make sure to choose typescript as transpiler.

```
jspm init
jspm install react react-dom
```

To be able to use the TypeScript definitions for react, you need to initialize tsd and install the definitions for react and react-dom.

```
tsd init
tsd install react react-dom --save
```
