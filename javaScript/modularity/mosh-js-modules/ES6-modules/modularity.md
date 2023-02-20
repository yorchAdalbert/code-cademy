# Modularity

## Benefits

+ Maintainability
+ Reuse code
+ Abstraction

Before ES6 javaScript uses module formats to ger modularity

+ AMD
    asynchronous module definition **use in browser app**
+ CommonJS
    use in Node.js
+ UMD
    Universal Module definition **use in browser and node.js**

In modern javaScript code we are gonna focus in two main formats

+ CommonJS
    Used in Node.js
+ ES6 modules
    Used in browsers

>
>    Thing that are highly related should go together
>   ** This is what we called COHESION**
>

## CommonJS

By default everything that is define in a module is consider to be private.

***You can see CommonJS references in the directory called common-js, 
   there node.js that shows how to use modularity***

## ES6 Modules

To run modularity in the browser it's necessary to add the attribute
`type="module"` on the script tag and also add the extension file in the
file that is making the importation from another file.  
