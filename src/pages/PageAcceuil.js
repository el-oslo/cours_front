import Navbar from './Navbar';
import Login from './Login';
import Affichage from './Affichage';


const PageAcceuil =()=>{
    return(
        < >
        <div className='page-acceuil'>
          <Navbar />
        </div>  
        <div className='log'>
          <Affichage/>
          <Login/>     
        </div>  
     </>
    );
}
export default PageAcceuil;