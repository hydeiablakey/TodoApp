import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import TodoApp from './components/TodoApp';
// import App from './components/App';

// import registerServiceWorker from './registerServiceWorker';

//empty array of tasks
const tasks = [



];

ReactDOM.render(<TodoApp dataItems={tasks} />, document.querySelector("#root"));
