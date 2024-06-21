import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
]);

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Cabecalho />
      <main className='container-lg mt-5'>
        <div className='d-flex justify-content-end mb-3'>
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="themeSwitch" 
              checked={isDarkTheme} 
              onChange={() => setIsDarkTheme(!isDarkTheme)} 
            />
            <label className="form-check-label" htmlFor="themeSwitch">
              {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
            </label>
          </div>
        </div>
        <RouterProvider router={router} />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
