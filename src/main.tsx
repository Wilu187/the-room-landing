import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// W buildzie produkcyjnym HTML jest wyrenderowany z góry (treść działa bez JS) — wtedy hydratujemy.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
