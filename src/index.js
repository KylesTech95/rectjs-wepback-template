import "./styles/main.css"

import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';

const domination = document.getElementById('root')
const root = createRoot(domination)

root.render(<App />)