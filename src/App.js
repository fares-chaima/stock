import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accueil from './Accueil';
import AddCmpt from './AddCmpt';
import AddFourn from './AddFourn';
import AddStructure from './AddStructure';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import CodeConf from './CodeConf';
import Contact from './Contact';
import DashAdmin from './DashAdmin';
import ChangeQuantDirect from './Directeur/ChangeQuantDirect';
import DashDirect from './Directeur/DashDirect';
import ListeBCIDirect from './Directeur/ListeBCIDirect';
import Fournisseurs from './Fournisseur';
import ModifProfile from './ModifProfile';
import NavBar from './NavBar';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import ChangeQuant from './RDS/ChangeQuant';
import DashRds from './RDS/DashRds';
import ListeBCI from './RDS/ListeBCI';
import SignIn from './SignIn';
import Structure from './Structure';
import AddArticle from './asa/AddArticle';
import AddBce from './asa/AddBce';
import AddChapitre from './asa/AddChapitre';
import AddProduit from './asa/AddProduit';
import Articles from './asa/Articles';
import Chapitres from './asa/Chapitres';
import ListeBce from './asa/ListeBce';
import MinNavBarAsa from './asa/MinNavBarAsa';
import ModifAsa from './asa/ModifAsa';
import Modifarticle from './asa/Modifarticle';
import Modifchapitre from './asa/Modifchapitre';
import Modifprod from './asa/Modifprod';
import Produits from './asa/Produits';
import ServiceAchat from './asa/ServiceAchat';

function App() {
  return (
    <Router>
      
    <div className="App">
     
      <div className="content">
      <ToastContainer />
        <Switch>
        <Route exact path="/">
          <NavBar />
        <Accueil  />
        </Route>

        <Route path="/Contact">
        <NavBar />
        <Contact />
       </Route>

      <Route  path="/SignIn">
      <NavBar />
      <SignIn />
      </Route>
      <Route path="/PwdOublieForm">
      <NavBar />
        <PwdOublieForm />
      </Route>

      <Route path="/CodeConf">
      <NavBar />
        <CodeConf  />
      </Route>

      <Route path="/NewPwd">
      <NavBar />
        <NewPwd  />
      </Route>
      
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/AfficherComptes">
      <MinNavBarAsa/>
                   <AfficherComptes />
      </Route>

      <Route path="/Structure">
        <MinNavBarAsa />
        <Structure />
      </Route>

      <Route path="/Fournisseurs" >
      <MinNavBarAsa />
        <Fournisseurs />
      </Route>

       <Route path="/AddCmpt">
       <MinNavBarAsa />
        <AddCmpt />
       </Route>

       <Route path="/AddStructure">
        <MinNavBarAsa />
        <AddStructure />
       </Route>

       <Route path="/AddFourn">
        <MinNavBarAsa />
        <AddFourn />
       </Route>

       <Route path="/ModifProfile">
        <MinNavBarAsa />
        <ModifProfile />
       </Route>

       <Route path="/ServiceAchat">
        <ServiceAchat />
       </Route>

       <Route path="/Produits">
        <MinNavBarAsa />
        <Produits />
       </Route>

       <Route path="/Articles">
        <MinNavBarAsa/>
        <Articles />
       </Route>

       <Route path="/Chapitres">
        <MinNavBarAsa />
        <Chapitres />
       </Route>

       <Route path="/AddProduit">
        <MinNavBarAsa/>
        <AddProduit />
       </Route>
       
       <Route path="/AddArticle">
        <MinNavBarAsa />
        <AddArticle />
       </Route>

       <Route path="/AddChapitre">
        <MinNavBarAsa />
        <AddChapitre />
       </Route>

       <Route path="/ModifAsa">
        <MinNavBarAsa />
        <ModifAsa />
       </Route>
       <Route path="/Modifchapitre/:id">
      <NavBar />
        <Modifchapitre />
      </Route>
      <Route path="/Modifarticle/:id">
      <NavBar />
        <Modifarticle />
      </Route>
      <Route path="/Modifproduit/:id">
      <NavBar />
        <Modifprod />
      </Route>
       <Route path="/ListeBce">
        <MinNavBarAsa />
        <ListeBce />
       </Route>

       <Route path="/AddBce">
        <MinNavBarAsa/>
        <AddBce />
       </Route>

       <Route path="/ListeBCI">
        <MinNavBarAsa />
        <ListeBCI />
       </Route>
       
       <Route path="/ChangeQuant">
        <MinNavBarAsa />
        <ChangeQuant />
       </Route>

       <Route path= "/ListeBCIDirect">
        <MinNavBarAsa />
        <ListeBCIDirect />
       </Route>
        
        <Route path="/ChangeQuantDirect">
          <MinNavBarAsa />
          <ChangeQuantDirect />
        </Route>

        <Route path="/DashRds">
        <MinNavBarAsa />
          <DashRds />
        </Route>

        <Route path= "/DashDirect">
          <MinNavBarAsa />
          <DashDirect />
        </Route>

        <Route path="/DashAdmin">
          <MinNavBarAsa />
          <DashAdmin />
        </Route>



      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
