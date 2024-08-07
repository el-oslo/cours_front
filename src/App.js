import './App.css';
import ClasseTabPage from './pages/pageClasse';
import CoursTabPage from './pages/pageCours';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import SalleTabPage from './pages/pageSalle';
import MatiereTabpage from './pages/pageMatiere';
import EnseignantTabPage from './pages/pageEnseignant';
import AdminPage from './pages/pageAdmin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Login Page
      <NavLink to={'/admin/cours'}>Entrer</NavLink>
    </div>
  },
  {
    path: '/admin',
    element: <AdminPage/>,
    children:[
      {
        path:'cours',
        element: <CoursTabPage/>
      },
      {
        path:'matiere',
        element: <MatiereTabpage/>
      },
      {
        path:'salle',
        element: <SalleTabPage/>
      },
      {
        path:'classe',
        element: <ClasseTabPage/>
      },
      {
        path:'enseignant',
        element: <EnseignantTabPage/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
