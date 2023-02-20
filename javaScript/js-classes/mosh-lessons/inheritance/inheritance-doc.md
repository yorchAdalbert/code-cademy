# Inheritance

JavaScript does not have classes, everything in javaScript is an object.

Inheritance refers when one class or more inherit all the properties and methods from a parent class.

'''
    Base/Super/Parent   -> How we called a class that inherits
    -----------------
         Shape          -> This is the parent class
    ----------------- 
     |            |      is a
     | is a       --------------------
     |                                |     -> This two child class inherit all the properties and method
    ----------                   ----------    from the parent class.
      Circle                       Square
    ----------                   -----------
    Derived/Sub/Child class  -> This is how we a called a class that inherits from another class.      

'''

We have 2 types of inheritance in JS
- Classical
- Prototypical

> Prototype is essentially a parent of another object (parent)

Every object that you create in JS directly or indirectly inherits form the objectBase (prototype).
**ObjectBase** is the root of all objects in JS and it does not have a prototype (parent).

> A prototype is just a regular **object** in memory
>> Objects created by a given constructor will have the same prototype.
>> Constructors also have a prototype property

In JS there are 2 kinds of methods and properties.
- Instance members
- Prototype members

> Don't modify objects you don't own!

** To see more references of this topic, check the file in this folder. There are some examples on them. 