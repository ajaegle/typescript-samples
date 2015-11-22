# Angular Sample App (without modules)

This sample demonstrates using TypeScript for an angular application. Due to not using modules the order of the generated javascript code matters.

Registering all angular components at the angular module is done in the index file which therefore has to `reference` all required files.

## Getting started

The project is configured for all files needed. JavaScript libraries are pulled from npm, TypeScript definitions are downloaded using tsd.

Initial setup
```
npm install
tsd install
```

TypeScript Compilation
```
tsc --watch
```

Running the app (in a new shell)
```
npm start
```

Browse the app at `http://localhost:3000`.
