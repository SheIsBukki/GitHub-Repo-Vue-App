# github-repo-vue-app

This is a solution to the GitHub Repository assignment project given by AltSchool Africa [School of Software Engineering](https://altschoolafrica.com/schools/engineering) tutors.

## Table of contents

- [Overview](#overview)
  - [Project question](#actual-project-instruction)
  - [Project to replicate](#replicated-project-instruction)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Get Started Developing with Vue 3 in Vite](#Get-Started-Developing-with-Vue-3-in-Vite)

## Overview

### Project question

Actual Instruction:
_Replicate the following project that was built in React with Vue 3:_

### Project to Replicate:

Instruction:
_You can use any form of styling, from Tailwind to vanilla CSS, CSS Modules, and StyleComponent. You are advised to use a UI library like Chakra UI, React-Aria, ShadCN to get you to move faster. Make sure you submit the correct URL for GitHub and the hosted version of your work. Use any hosting platform you are familiar with._

Questions:
_Implement a Web App using GitHub API to fetch your GitHub repositories portfolio. Show a page listing all your repositories on GitHub with pagination enabled. Bonus: Implement Search and Filter. Create another page showing data for a single repo when clicked from the page. Show all repos using nested routes while using all the necessary tools in React. Implement an Error Boundary (show a page to test the error boundary). A 404 page (show a page to test the 404 page). Good Layout, UI, and Designs are essential. Accessibility techniques taught in semester one are Important. BONUS: Provide a button to Create a new repo using a Modal, allow a way to update some details of the created repo, and finally add a way to delete the repo. Instructors Award of Recognition ????._

### Links

- Live Site URL: https://git-hub-repo-vue-app.vercel.app

## My process

### Built with

- Vue 3, Vue Directives, Options API, Vue Router, ErrorBoundary, fetch API, Asyn/Await, and Ionic framework

### What I learned

- How to fetch data from an external source using `fetch()`, `Axios`, and `Async/Await`. I decided not to use Axios because I didn't want to install the dependency, but I now know how to use it to fetch data from API
- Adding routes to react apps using Vue Router
- Implementing SEO using within the Routes declaration
- Depolying Vue 3 Routed sites to Vercel
- How to implement custom pagination
- How to create ErrorBoundary and a NotFound pages in Vue
- Using the Vue lifecycle hooks

### Continued development

This was my first time working with some of the concepts I used in building the project. I plan to learn more about APIs, Vue Composition API, and the concepts I used in this project. I wrote both Options API version and Composition API version, but commented out the Composition API code version because at the time of writing this README I haven't written the Composition API version of the RepoCards component.
For UI framework, I used the Ionic Vue framework and I like its simiplicity and intuitiveness. However, if I will still use the Ionic framework in the future, I will have to learn in-depth about it because following the framework's documentation and routing through ionic vue router caused my first build to be rejected. So I reverted to using vue router and everything was resolved.

### Useful resources

These resources were useful in helping me build this project

- [How to Set Up a Dropdown Navbar Router with Vue.js](https://richard-taujenis.medium.com/how-to-set-up-a-dropdown-navbar-router-with-vuejs-6e0ef48625f6)
- [Error Handling in Vue 3](https://enterprisevue.dev/blog/error-handling-in-vue-3/)

### Author

Bukola Ogunleye

## Get Started Developing with Vue 3 in Vite

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
