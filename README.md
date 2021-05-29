# A Book Lending App
This is a bookshelf app that lets you categorize books you have read, 
are currently reading, or want to read.

## Installation
Use the package manager to install packages needed for the app to run
npm i 

## Start Project
Use 'npm start' to do this

## Update

For reusability,App.js was broken into :
* Bookshelf component
* Book Component
* search-button component

Also 2 pages were created. The pages are:
* HomePage
* SearchPage

In addition, 2 reusable components were created too
 * book
 * bookshelf

React Router router was implemented using **npm i 'react-router-dom'** in order to navigate from the homepage to the search page and vice-versa

ContextAPI was implemented for state management
The main page control feature which allows users to move books between shelves was implemented
 A Search page feature on the search page allows the user to search and select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. 