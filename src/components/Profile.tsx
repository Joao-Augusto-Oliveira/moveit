import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Joao-Augusto-Oliveira.png" alt="Joao Augusto" />
            <div>    
                <strong>Joao Augusto</strong>
                <p>
                <img src="icons/level.svg" alt="Level" />

                    Level 1
                </p>
            </div>
        </div>            

    )
}

