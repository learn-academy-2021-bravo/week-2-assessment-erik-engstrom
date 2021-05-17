# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The .map() higher order function takes 3 predefined parameters and they are (value, index, array), I think.... Value is the only one that is required and the other 2 are optional. 

  Researched answer: According to MDN, the .map() function provides a higher order function for each element in an array and constructs a new array from the results. The three predefined parameters are (element, index, array) and only element is required. So I was close with the value answer, but the textbook answer for the first parameter in .map() is element. 



2. What is object destructuring?

  Your answer: Object destructuring is the ability to extract certain value(s) from an array and save those value(s) to a new variable or array.

  Researched answer: MDN says object destructuring is an expression that takes values from arrays or properties from objects and saves to distinct variables.  



3. Why would you use the method super()?

  Your answer: You would use the method super() for class inheritance for "initializing" the stored information from a previously defined class. 

  Researched answer: The super() method is called in the constructor() method and calls the parent's constructor method and gets access to the parent's properties and methods. 



4. What is a React Fragment? Why would you use one?

  Your answer: A React Fragment syntax is <> </> and wraps the code block in react that is dynamic. If the code block is not between the fragments then the code will not run. 

  Researched answer: A React Fragment is a syntax for adding multiple elements to a React Component without warpping them in an extra DOM node. One would use a fragment because it allows you to group multiple sibling components without any unnecessary markup in the rendered HTML.



5. What is JSX?

  Your answer: JSX I think stands for Javascript markup language and it allows for you to use HTML tags in Javascript.

  Researched answer: JSX stands for Javascript XML and allows us to write HTML in React and place them in the DOM without any other methods. JSX is an extension of Javascript and is related closer to Javascript than HTML so naming conventions need to be in camelCase.  



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I have no idea...

  Researched answer: Hoisting in Javascript is where varaibles and function declarations are moved to the top of their scope before code execution. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React props: React props are properties that are used for passing data from one component to another. Props are read-only data and should not be changed by child components.

2. React lifecycle methods: React lifecycle methods are like the series of events that happen in a React component from birth to death. Some common lefecycle methods are: render(), componentDidMount(), componentDidUpdate, and componentWillUnmount.

3. Logic/smart component: Smart components return UI elements bound to the state variables which re-renders when dynamic changes occur. Smart components manage their own state on the basis of variable change. 

4. Display/dumb component: Dumb components are widely used to dispaly the part of the UI that doesn not update or change dynamically. They are stateless components which do not house any states and dp not offer any complicated logic.

5. DOM Events: DOM events allow Javascript to register different event handlers on elements. THe DOM events are usually used in combination with functions and the function will not be executed before the event happens.
