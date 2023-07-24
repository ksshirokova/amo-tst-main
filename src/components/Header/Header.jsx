import styles from './Header.module.css'
import logo from '../../images/logo_welbex.svg';
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';
import viber from '../../images/viber.svg';
function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <p className={styles.logoText}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <nav>
        <ul className={styles.list}>
          <li><a className={styles.link} href="!#">Услуги</a></li>
          <li><a className={styles.link} href="!#">Виджеты</a></li>
          <li><a className={styles.link} href="!#">Интеграции</a></li>
          <li><a className={styles.link} href="!#">Кейсы</a></li>
          <li className={styles.lastLink}><a className={styles.link} href="!#">Сертификаты</a></li>
        </ul>
      </nav>
      <a href="tel:+7 555 555-55-55" className={styles.phoneNumber}>+7 555 555-55-55</ a>
      <nav class={styles.menu}>
        <ul className={styles.list}>
          <li><a className={styles.link} href="!#"><img src={telegram} alt="telegram icon"/></a></li>
          <li><a className={styles.link} href="!#"><img src={viber} alt="viber icon"/></a></li>
          <li><a className={styles.link} href="!#"><img src={whatsapp} alt="whatsapp icon"/></a></li>
        </ul>
      </nav>
    </section>


  )
}

export default Header;