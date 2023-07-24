import styles from './Footer.module.css';
import telegram from '../../images/telegram.svg';
import whatsapp from '../../images/whatsapp.svg';
import viber from '../../images/viber.svg';

function Footer() {
  return (
    <section className={styles.footer}>

      <nav className={styles.nav}>
        <h3 className={styles.header}>О компании</h3>
        <ul className={styles.list}>
          <li><a className={styles.firstLink} href="!#">Партнёрская программа</a></li>
          <li><a className={styles.link} href="!#">Вакансии</a></li>
        </ul>
      </nav>
      <div>
        <h3 className={styles.header}>Меню</h3>
        <nav className={styles.menu}>

          <ul className={styles.list}>
            <li><a className={styles.link} href="!#">Расчёт стоимости</a></li>
            <li><a className={styles.link} href="!#">Услуги</a></li>
            <li><a className={styles.link} href="!#">Виджеты</a></li>
            <li><a className={styles.link} href="!#">Интеграции</a></li>
            <li><a className={styles.link} href="!#">Наши клиенты</a></li>
            <li><a className={styles.link} href="!#">Кейсы</a></li>
            <li><a className={styles.link} href="!#">Благодарственные письма</a></li>
            <li><a className={styles.link} href="!#">Сертификаты</a></li>
            <li><a className={styles.link} href="!#">Блог на Youtube</a></li>
            <li><a className={styles.link} href="!#">Вопрос / Ответ</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.lastHeader}>Контакты</h3>
        <a href="tel:+7 555 555-55-55" className={styles.phoneNumber}>+7 555 555-55-55</ a>
        <nav class={styles.icons}>
          <ul className={styles.iconsList}>
            <li><a className={styles.link} href="!#"><img src={telegram} alt="telegram icon" /></a></li>
            <li><a className={styles.link} href="!#"><img src={viber} alt="viber icon" /></a></li>
            <li><a className={styles.link} href="!#"><img src={whatsapp} alt="whatsapp icon" /></a></li>
          </ul>
        </nav>
        <p className={styles.text}>Москва, Путевой проезд 3с1, к 902</p>
        <p className={styles.logoText}>©WELBEX 2022. Все права защищены.</p>
        <a className={styles.linkPolitics} href="!#">Политика конфиденциальности</a>
      </div>
    </section>
  )
}
export default Footer;