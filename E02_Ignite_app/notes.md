# JSX Capitalization

React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it’s a component instance; if not, then it’s an HTML element.

// This is considered a component by React.
<ThisComponent />

// This is considered a JSX HTML tag.

<div>

## what is transitive module?

Ans : suppose we have downloaded parcel as dependecies but when we go inside the node mudules we will see a lot of files other then parcel . That is because parcel as a module has dependecies over other node moudules and those modules can have dependecies over other modules. this is called transitive module.

## What is npx ?

Ans : whenever we need to expecute any package we write npx package_name .
eg npx parcel index.html

## What is the difference btn npm and npx ?

Ans :

# when we execute index.js file using parcel, it build a development build of our app and hosts it on local server

# it is always prefered not to add CDN link for react and add react as dependencies in package.json file for mainly 2 reasons

1. CDN link will make api call to fetch react files which is costly and slow
2. if suppose any update comes in react version we have to manually update the CDN links for the update , same is easy to track when used with tilda or arrow in package.json

# when we use simple srcipt tag to connect the js file , browser treats it as a broweser js file and it will throw error when we user import keyword in it. so we have to use an attribute inside of our script tag , which is called as "type" and use value as "module" to specify it to browser that it is a module and not normal js file.

# Parcel

- Dev builds
- Server creation
- HMR - Hot Module Replacement(auto refresh)
- File watching algorithm - C++
- Caching - Faster build
- Image optimization
- Minify file
- Bundle
- Compressing
- Consistent hashing
- Code spliting
- Differential bundling - support old browser
- Good error suggestion

# Components

A component in React is a reusable piece of code that encapsulates HTML, CSS, and JavaScript code to create a self-contained UI element. Components can be nested inside other components to create complex UIs.
Components are the building blocks of React applications. They are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function. Components come in two types, Class components and Function components.

1. Functional component
   it is normal javascript function which returns jsw to creat react element
   const HeadinElement = () => {
   return <h1>This is a react project</h1>
   }

# Component composition

- component inside of another component is called as component composition
<div>
    <Title/>
</div>

# Config driven ui
