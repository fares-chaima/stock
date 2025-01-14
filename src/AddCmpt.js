import React, { useEffect, useState } from "react";
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
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);

    useEffect(() => {
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
    }, []);

    const handleRoleChange = (event) => {
        const value = event.target.value;
        setSelectedRoles(prevSelectedRoles =>
            prevSelectedRoles.includes(value)
                ? prevSelectedRoles.filter(role => role !== value)
                : [...prevSelectedRoles, value]
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            firstname,
            lastname,
            email,
            roleIds: selectedRoles.map(roleName => {
                const role = roles.find(r => r.name === roleName);
                return role ? role.id : null;
            }).filter(id => id !== null),
            password: pwd
        };

        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (response.ok) {
                alert('Utilisateur ajouté avec succès');
            } else {
                alert('Erreur lors de l\'ajout de l\'utilisateur');
            }
        })
        .catch(error => console.error('Erreur:', error));
    };

    return ( 
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span>ajouter un compte</span>
                <div className="flx1">
                    <div className="lft">
                        <div className="nom">
                            <img src={nom} alt="" />
                            <input 
                                type="text" 
                                placeholder="nom"
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input 
                                type="text" 
                                placeholder="prenom"
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input 
                                type="email" 
                                placeholder="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="rght">   
                    <div className="role">
    <img src={roleIcon} alt="" />
    <select value={selectedRoles} onChange={handleRoleChange}>
        <option value="" disabled>Select roles</option>
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
                            <input type="password" placeholder="confirmer le mot de passe"/>
                        </div>   
                    </div>
                </div>
                <button type="submit">confirmer</button>
            </form>
        </div>
    );
}

export default AddCmpt;
