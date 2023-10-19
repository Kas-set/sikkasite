import BodyPresentation from "./BodyPresentation";
import BodyService from "./BodyService";
import '../App.css';
import img1 from '../assets/images/4_Plan-de-travail-1_Plan-de-travail-1 (1).png';


const Accueil = () => {
    const presentationArray = {plusValeur:"SIKKA Communication", moinsValuer:" est une entreprise multiverse à taille humaine"}
    return (  

        <div className="glass">
            <BodyPresentation
                plusValeur ={presentationArray.plusValeur}
                moinsValuer = {presentationArray.moinsValuer}
                img ={img1}
            />
            <BodyService/>

        </div>
    );
}
 
export default Accueil;