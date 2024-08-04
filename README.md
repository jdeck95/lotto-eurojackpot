# lotto-eurojackpot

A simple display of the latest eurojackpot draws

## Project Setup

```sh
npm install
```

## Before starting development

Before using App, you need to edit the following file to prevent CORS-Errors:

### **hosts**

You could find your hosts file here:

Windows: C:\windows\system32\drivers\etc\hosts

Ubuntu/Mac: /etc/hosts

Add the following line:

```
127.0.0.1       eurojackpot-local.lottohelden.de
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Adding new games

New games can be added in `src/configs/games.ts`
