import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Joao-Augusto-Oliveira.png" alt="Joao Augusto" />
            <div>    
                <strong>Joao Augusto</strong>
                <p>
                <img src="icons/level.svg" alt="Level" />

                    Level {level}
                </p>
            </div>
        </div>            

    )
}

