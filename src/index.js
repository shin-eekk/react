import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

//SCSS 모두 1회만
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
    
 
);

//index 는 1회 진행할 것만!