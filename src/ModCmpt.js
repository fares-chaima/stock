import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import hidePwdImg from './images/hide-password.svg';
import mail from "./images/mail.svg";
import pd from "./images/pd.svg";
import prenom from "./images/prenom.svg";
import roleIcon from "./images/role.svg";
import showPwdImg from './images/show-password.svg';

const AddCmpt = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                setFirstname(data.firstname);
                setLastname(data.lastname);
                setEmail(data.email);
                setPassword(data.password);
                setSelectedRole(data.roleName);
            })
            .catch(error => console.error('Erreur lors de la récupération des données de l\'utilisateur:', error));
        
        fetch('http://localhost:3001/roles')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRoles(data);
                } else {
                    console.error('Les données récupérées ne sont pas un tableau:', data);
                }
            })
            .catch(error => console.error('Erreur lors de la récupération des rôles:', error));
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            roleName: selectedRole
        };

        try {
            const response = await fetch(`http://localhost:3001/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Données utilisateur mises à jour avec succès.');
            }else{
               
            }
        } catch (error) {
            console.log('Erreur lors de la mise à jour des données utilisateur:', error)
        }
      
    };

    return ( 
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span>Modifier un compte</span>
                <div className="flx1">
                    <div className="lft">
                        <div className="nom">
                            <img src={nom} alt="" />
                            <input 
                                type="text" 
                                placeholder="Nom"
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input 
                                type="text" 
                                placeholder="Prénom"
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input 
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="rght">   
                        <div className="role">
                            <img src={roleIcon} alt="" />
                            <select 
                                value={selectedRole} 
                                onChange={e => setSelectedRole(e.target.value)}>
                                <option value="" disabled>{selectedRole}</option>
                                {roles.map(role => (
                                    <option key={role.id} value={role.name}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="pd">
                            <img src={pd} alt="" />
                            <input
                                name="password"
                                placeholder="Mot de passe"
                                type={isRevealPwd ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <img
                                title={isRevealPwd ? "Cacher le mot de passe" : "Afficher le mot de passe"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                            />
                        </div>         
    
                        <div className="confpd">
                            <img src={pd} alt="" />
                            <input type="password" placeholder="Confirmer le mot de passe"/>
                        </div>   
                    </div>
                </div>
                <button type="submit">Confirmer</button>
            </form>
        </div>
    );
}

export default AddCmpt;
