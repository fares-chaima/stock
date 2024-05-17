import React from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import add from "./images/Add.svg";
import nom from "./images/User_alt.svg";
const AddStructure = () => {
    //test
    return ( 
        <div className="pg">
        <SideBar />
        <form  >
            <span style={{marginLeft: "150px"}} >ajouter une structure</span>
            <div className="flx2" style={{flexDirection: "column"}}>
                
                
                    <div className="nom">
                        <img src={add} alt="" />
                        <input type="text"  placeholder="le nom de structure"/>
                    </div>
                    <div className="respn">
                        <img src={nom} alt="" />
                        <input type="text" placeholder="le responsable"  />
                    </div>
                    
                
                
                
            </div>
            <button  style={{marginLeft: "150px"}} >confirmer</button>
        </form>
    </div>
     );
}
 
export default AddStructure;