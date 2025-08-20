import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import ReactDOM from 'react-dom/client';

// const data=(
//     <ul>
//         <li>Apples</li>
//         <li>Bananas</li>
//         <li>Cherries</li>
//     </ul>
// );
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// root.render(data)
