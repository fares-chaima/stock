import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";

const Param = () => {
    // State pour gérer les valeurs du formulaire
    const [denomination, setDenomination] = useState("");
    const [codeGestionnaire, setCodeGestionnaire] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    useEffect(() => {
        // Récupération des données de parametre depuis le backend lors du chargement du composant
        fetch("http://localhost:3001/parametre")
            .then(response => response.json())
            .then(data => {
                // Mise à jour des états avec les données récupérées
                if (data && data.length > 0) {
                    const parametre = data[0]; // Supposons que nous récupérons uniquement le premier paramètre
                    setDenomination(parametre.denomination);
                    setCodeGestionnaire(parametre.code_gestionnaire);
                    setAdresse(parametre.adresse);
                    setTelephone(parametre.telephone);
                    setPhotoUrl(parametre.photo_url);
                }
            })
            .catch(error => console.error("Erreur lors de la récupération des données de parametre :", error));
    }, []);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Construction de l'objet contenant les données du formulaire
        const formData = {
            denomination,
            codeGestionnaire,
            adresse,
            telephone,
            photoUrl
        };

        // Envoi des données au backend via une requête HTTP (par exemple avec fetch)
        fetch("http://localhost:3001/parametre", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Données envoyées avec succès :", data);
            // Réinitialisation du formulaire après l'envoi des données
            setDenomination("");
            setCodeGestionnaire("");
            setAdresse("");
            setTelephone("");
            setPhotoUrl("");
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données :", error);
        });
    };

    return (  
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span>Les paramètres</span>
                <div className="flx5">
                    <div className="den">
                        <span>Dénomination</span>
                        <input type="text" placeholder="denomination" value={denomination} onChange={(e) => setDenomination(e.target.value)} />
                    </div>
                    <div className="lft">
                        <div className="codeges">
                            <span>Code gestionnaire</span>
                            <input type="number" value={codeGestionnaire} onChange={(e) => setCodeGestionnaire(e.target.value)} />
                        </div>
                        <div className="adr">
                            <span>Adresse</span>
                            <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                        </div>
                    </div>
                    <div className="rght">   
                        <div className="tlp">
                            <span>Téléphone</span>
                            <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        </div>
                        <div className="pht">
                            <span>Photo url</span>
                            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button type="submit">confirmer</button>
            </form>
        </div>
    );
}
 
export default Param;
