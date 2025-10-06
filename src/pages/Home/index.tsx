import styles from "./home.module.scss";
import logo from "../../assets/home/NissinLogoHome.svg";
import WCF from "../../assets/home/whatcamefirst_.png";
import EGG_Chicken from "../../assets/home/EggorChicken.png";
// import twocup from '../../assets/home/two_cup_and_sun_bg.png';
import twocup from "../../assets/home/Twocup.png";

import { ROUTES } from "../../lib/consts";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();
    const handleSubmitVote = (e: any) => {
    e.preventDefault();

     
        navigate(ROUTES.VOTE);
    
      
  };

  return (
    <>
      <div className={styles.homeContainer}>
       
        <div className={styles.header}>
          <div className={styles.homeLogo}>
            <img src={logo} alt="Logo" 
              loading="eager"
              fetchPriority="high" 
                decoding="async"
            />
          </div>
        </div>
         <div className={styles.homeContent}>

        <div className={styles.whatComeFirst}>
          <img src={WCF} alt="WCF"
            loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        </div>
        <div className={styles.egg_Chicken}>
          <img src={EGG_Chicken} alt="EGG_Chicken"
            loading="eager"
        
              fetchPriority="high" 
                decoding="async"
          />
        </div>
        <div className={styles.twocup}>
          <img src={twocup} alt="twocup"
            loading="eager"
              fetchPriority="high" 
                decoding="async"
          />
        </div>
        <div className={styles.homeText}>
          <h2>vote to choose your flavour</h2>
          <h4>and win assured cashback</h4>
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.homeButton} type="submit" onClick={(e) => handleSubmitVote(e)}>
            <span>CAST YOUR VOTE</span>
          </button>
        </div>
      </div>
      </div>

    </>
  );
}

export default Home;
