import styles from './Main.module.css'
import Presents from "../Presents/Presents";
import Promo from "../Promo/Promo";

function Main(){
  return(
    <section className={styles.main}>
      <Promo />
      <Presents />
    </section>
  )
}

export default Main;