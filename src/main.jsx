import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PokemonContext, PokemonProvider } from './contexts/PokemonContext.jsx'
import { FavoritesContext, FavoritesProvider } from './contexts/FavoritesContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <PokemonProvider>
        <FavoritesProvider>
        <BrowserRouter>

          <App />

        </BrowserRouter>
        </FavoritesProvider>
      </PokemonProvider>
    </React.StrictMode>
  );

