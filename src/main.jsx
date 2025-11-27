import reactDOM from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import LessonContent from './components/LessonContent';
import { DataContext } from './context/DataContext';
import HeroSection from './components/HeroSection';
import React from 'react';


const root = reactDOM.createRoot(document.getElementById('root'));


const appRoutes = createRoutesFromElements(
    <Route>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Content/:fieldId/:Id' element={<Content  />} /> 


    </Route>
)

const routers = createBrowserRouter(appRoutes);

root.render(
  <React.StrictMode>
<DataContext.Provider value={learningArticles}>
      <RouterProvider router={routers} >
        </RouterProvider>
      </DataContext.Provider>
  </React.StrictMode>
);