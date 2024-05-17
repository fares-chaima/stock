import React, { useState } from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import hidePwdImg from './images/hide-password.svg';
import mail from "./images/mail.svg";
import pd from "./images/pd.svg";
import prenom from "./images/prenom.svg";
import role from "./images/role.svg";
import showPwdImg from './images/show-password.svg';
const AddCmpt = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return ( 
        <div className="pg">
            <SideBar />
            <form >
                <span>ajouter un compte</span>
                <div className="flx1">
                    
                    <div className="lft">
                        <div className="nom">
                            <img src={nom} alt="" />
                            <input type="text"  placeholder="nom"/>
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input type="text" placeholder="prenom"  />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input type="email" name="email" id="" placeholder="email" />
                        </div>
                    </div>

                    <div className="rght">   
                    <div className="role">
                        <img src={role} alt="" />
                        <input type="text" placeholder="role" />
                        </div>  

                    <div className="pd">
                        <img src={pd} alt="" />
                    <input
                name="pwd"
                placeholder="mot de passe"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
                />
                        </div>         

                    <div className="confpd">
                    <img src={pd} alt="" />
                        <input type="password" name="" id="" placeholder="confirmer le mot de passe"/>
                        </div>   
                    </div>
                    
                </div>
                <button>confirmer</button>
            </form>
        </div>
     );
}
 
export default AddCmpt;