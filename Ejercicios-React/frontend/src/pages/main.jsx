import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@styles/index.css';
import '@styles/App.css';
import '@styles/login.scss';
import '@styles/Activities.scss';
import '@styles/Poke.css';
import Login from './login.jsx';
import Activities from "./activities.jsx";
import Layout from '@components/Layout.jsx';
import Home from './Home.jsx';
import Poke from './Poke.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/actividades" element={<Activities />} />
      <Route path="/poke" element={<Poke />} />
      </Route>

    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
