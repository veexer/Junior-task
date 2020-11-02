This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation

Simply run `npm i` in the project directory.

## Development mode - run `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Explanation of how the app was developed(accurate to the development timeline):
1. Slide.js - reusable image component rendering based on prop 'slide_id' - rendering image based on the prop
2. Carousel.js - this component was developed when finishing up Slide.js so that I can pass the 'slide_id' prop to it,
adding logic to the carousel was the most time expensive part, I've started with rendering of the slides and adding a 'ref' to the slider container so that I can manipulate the div, developed 'previous' and 'next' buttons that transform the slider_container left or right 250px using transform and transitionDuration which has proven troublesome given this kind of scrolling did not work well unless I use whole width of screen visitor is using,
I've also tried setting overflowX to scroll and manipulating the scroll itself but haven't found an efficient method for that.
I believe ideal solution would be to transform the 'Slide' component from Slide.js itself based on props from the Carousel but due to time limitations settled for a non animated carousel, using .append and .removeChild on setInterval to achieve a carousel that will render well on different screen sizes
3. Navigation.js - added 'Start' and 'My profile' text, set display to flex so that they render in a horizontal row,
implemented link from React Router
4. My-profile.js - created, added the Header element to it
5. Index.js - added BrowserRouter, Switch and Route from React router to allow accessing my-profile via url /my-profile
6. FetchComponent.js - created getData function calling GitHub API, profile picture url added to local storage, executed on componentDidMount();
added conditional rendering based on in the local storage data (whether picture url is available) and added a placeholder (getData is on setTimeout 1000 so that you can see the doggo),
added <h1> welcoming the user based on component state
added FetchGit component from FetchComponent.js to my.profile.js to render alongside the header
