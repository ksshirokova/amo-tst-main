import styles from './Promo.module.css'

function Promo() {
  return (
    <div className={styles.text}>
      <h1 className={styles.main}>Зарабатывайте больше<br /><span className={styles.span}>с WELBEX</span></h1>
      <p className={styles.description}>Развиваем и контролируем продажи за вас</p>
    </div>
  )
}

export default Promo;