import './App.css';
import ClasseTabPage from './pages/pageClasse';
import CoursTabPage from './pages/pageCours';
import { createBrowserRouter, NavLink, RouterProvider, useRouteError } from 'react-router-dom';
import SalleTabPage from './pages/pageSalle';
import MatiereTabpage from './pages/pageMatiere';
import EnseignantTabPage from './pages/pageEnseignant';
import AdminPage from './pages/pageAdmin';
import { TbError404 } from 'react-icons/tb';
import { MdError } from 'react-icons/md';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Login Page
      <NavLink to={'/admin/cours'}>Entrer</NavLink>
    </div>,
    errorElement: <PageError/>,
  },
  {
    path: '/admin',
    element: <AdminPage/>,
    errorElement: <PageError/>,
    children:[
      {
        path:'cours',
        element: <CoursTabPage/>,
        errorElement: <PageError/>
      },
      {
        path:'matiere',
        element: <MatiereTabpage/>,
        errorElement: <PageError/>
      },
      {
        path:'salle',
        element: <SalleTabPage/>,
        errorElement: <PageError/>
      },
      {
        path:'classe',
        element: <ClasseTabPage/>,
        errorElement: <PageError/>
      },
      {
        path:'enseignant',
        element: <EnseignantTabPage/>,
        errorElement: <PageError/>
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

function PageError(){
  const error = useRouteError()
  console.error(error)

  const icon = {
    width: '200px',
    height: 'auto',
    color: 'var(--orange)'
  }

  const text = {
    fontSize: '14pt',
    fontWeight: '700',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return <div className='error-page'>
    <h1>Une erreur est survenue lors de chargement d'une page</h1>
    <p style={text}>
      {error.status === 404 ? <TbError404 style={icon}/> : <MdError/> }
      {error.statusText}
    </p>
  </div>
}

export default App;
