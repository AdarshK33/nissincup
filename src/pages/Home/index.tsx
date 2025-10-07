import styles from "./home.module.scss";
import { IMAGES } from "../../lib/assets.ts";

import { ROUTES } from "../../lib/consts";
import { useNavigate } from "react-router-dom";
import API from "../../api/index.ts";
import { setUserKey } from "../../store/slices/authSlice.ts";
import { logoutUser } from "../../lib/utils.ts";
import { store } from "../../store/store.ts";

import CommonImage from "../../components/common/Image.tsx";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

    useEffect(() => {
    API.createUser()
      .then((response) => {
        store.dispatch(setUserKey(response));
        logoutUser();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const handleHome = (e: any) => {
    e.preventDefault();
    API.castVote()
      .then(() => {
        navigate(ROUTES.VOTE);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.header}>
          <div className={styles.homeLogo}>
            <CommonImage src={IMAGES.HOME_LOGO} alt="Logo" />
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.whatComeFirst}>
            <CommonImage src={IMAGES.HOME_WCF} alt="WCF" />
          </div>
          <div className={styles.egg_Chicken}>
            <CommonImage src={IMAGES.EGG_Chicken} alt="EGG_Chicken" />
          </div>
          <div className={styles.twocup}>
            <CommonImage src={IMAGES.TWO_CUP} alt="twocup" />
          </div>
          <div className={styles.homeText}>
            <h2>VOTE TO CHOOSE YOUR FLAVOUR</h2>
            <h4>AND WIN ASSURED CASHBACK</h4>

          </div>
          <div className={styles.buttonSection}>
            <button
              className={styles.homeButton}
              type="submit"
              onClick={(e) => handleHome(e)}
            >
              <span>CAST YOUR VOTE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
