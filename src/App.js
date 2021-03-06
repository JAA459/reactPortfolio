import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './Components/Home/index';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const project = [
  {
    id: 1,
    name: "weGolf",
    image: "assets/images/weGolfResize.jpg",
    description: "An interactive, secure, and friendly application that brings together the MERN stack allowing users to record, save, and edit their matches all in one go, retrieving data from a highly scalable and secure MySQL database. They can also see how their golf score compares to the other users’ scores across the app. The application uses Firebase authentication to provide a secure and safe passport for users email and password. With implemented functionality for users to update account information and password resets.",
    url: "https://wegolf-bmaj.herokuapp.com/",
    githubURL:"https://github.com/Brando2147/weGOLF"
  },
  {
    id: 2,
    name: "PitchATent",
    image: "assets/images/pitchResize.jpg",
    description: "PitchATent is an application created for campers who want to go out and explore new campgrounds. Users can search for campsites by state and using a third-party API a list of campsites will be shown on the page along with additional information about the campsite that include descriptions of the campground, any permit info the user may need, and the weather across the state. This application uses localstorage to allow the user to save campsite to their favorites tab and view them later",
    url: "https://adamjuwig.github.io/pitch-a-tent/",
    githubURL:"https://github.com/adamjuwig/pitch-a-tent"
  },
  {
    id: 3,
    name: "Budget Tracker App",
    image: "assets/images/budgetResize.jpg",
    description: "Budget Tracker is an application that allows users to track funds by adding and subtracting and showing them how many funds they have available. The application also puts the funds spent and added into a graph displayed on the screen. Most importantly the application works offline and when back online sends the information applied when offline to the database.",
    url: "https://tranquil-lowlands-65224.herokuapp.com/",
    githubURL:"https://github.com/JAA459/18-budget-tracker"
  },
  {
    id: 4,
    name: "Inventory App",
    image: "assets/images/inventoryResize.jpg",
    description: "JAR Inventory is a business tracking management application that allows any company to track product. Businesses are able to add, edit, and delete inventory items in the table. There is also a PDF export option to be able to save and print the inventory table. JAR inventory is a full-stack application that using passport authentication to store sensitive user information.",
    url: "https://business-inventory-project.herokuapp.com/",
    githubURL:"https://github.com/roseannenguyen/Business-Inventory"
  },
  {
    id: 5,
    name: "Fitness Tracker",
    image: "assets/images/fitnessResize.jpg",
    description: "Workout App is a full stack Javascript Appliaction that tracks the users workouts using mongodb node.js express and mongoose. In the application users are able to create new workouts and complete or continue the workout. Users are also able to view recent workouts that gives workout specifics including duration of all workouts",
    url: "https://immense-meadow-24365.herokuapp.com/",
    githubURL:"https://github.com/JAA459/17-workout-app"
  },
  {
    id: 6,
    name: "Note Taker App",
    image: "assets/images/noteResize.jpg",
    description: "Note-Taker-App is an application in which the user can save notes that include a title and text to a database and see it save onto the file. The user can add as many notes as they like then choose to delete a specific note if they wish too.",
    url: "https://dry-shore-45345.herokuapp.com/",
    githubURL:"https://github.com/JAA459/11-note-taker"
  }
]

function App() {
  return (
    <div className="App">
   <Index />
   <About />
   <Skills />
   <Projects project={project} />
   <Contact />
    </div>
  );
}

export default App;
