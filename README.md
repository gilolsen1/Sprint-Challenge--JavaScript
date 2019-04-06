# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

Both forEach and map are methods for arrays- forEach mutates each value in the array, while map creates a new array, leaving the original array intact.

2. What is the difference between a function and a method?

A method is a function as a value in object's key:value pair. 

3. What is closure?

Closure is the concept that describes the scope of access to data in a program.  The name-drop definition is "the lexical scope". 

It's a one-way access or "visibility" concept.  Functions will have access to all variables OUTSIDE themselves, but can't "look" or access the data from functions nested deeper.  I envision the concept like crab traps inside crab traps... a crab (or data) can get all the way IN the deepest nested crab trap, but if a crab is born (or a variable declared) inside one of the traps, it could go into deeper traps, but could never get to even one level trap above where he was born.   We use closure in programming to protect our variables/data from getting accidentally mutated outside where the data is needed.

4. Describe the four rules of the 'this' keyword.

Default/Window Binding:  If no action is taken, "this" is bound to everything, referring to javascript itself.  So Meta.

Implicit Binding:  Whenever a method is called whatever is "to the left of the dot" is this.  There's no argument to make it happen, which makes it implicit.

Explicit binding:  The first argument in .call and .apply methods sets what `this` is bound to.  

New:  Whenever a constructor function is called,`this` automatically refers to the resulting new object.

5. Why do we need super() in an extended class?

Super() links the extended class to the base class the way developers had to do with object.create before classes were a part of Javascript.   Once called, the result is the extended (child) class will inherit the base (parent's) prototype methods. Super() must be called before using "this". 

## Project Set up

Follow these steps to set up and work on your project:

- [ x] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
