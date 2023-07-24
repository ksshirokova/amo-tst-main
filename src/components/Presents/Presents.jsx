import styles from './Presents.module.css';

function Presents() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Вместе с <span className={styles.spanHeader}>бесплатной консультацией</span> мы дарим:</h2>
      <div className={styles.presents}>
        <p className={styles.presentsText}><span className={styles.presentsSpan}>Виджеты<br /></span>30 готовых решений</p>
        <p className={styles.presentsText}><span className={styles.presentsSpan}>Dashboard<br /></span>с показателями
          вашего бизнеса</p>
        <p className={styles.presentsText}><span className={styles.presentsSpan}>Skype Аудит<br /></span>отдела продаж и CRM системы</p>
        <p className={styles.presentsText}><span className={styles.presentsSpan}>35 дней<br /></span>использования CRM</p>
      </div>
      <div className={styles.presents320}>
        <div className={styles.firstColumn}><div className={styles.presentElement}><div className={styles.dash} /><p className={styles.presentsSpan}>Skype аудит</p></div>
          <div className={styles.presentElement}><div className={styles.dash} /><p className={styles.presentsSpan}>Dashboard</p></div></div>
        <div>
          <div className={styles.presentElement}><div className={styles.dash} /><p className={styles.presentsSpan}>30 виджетов</p></div>
          <div className={styles.presentElement}><div className={styles.dash} /><p className={styles.presentsSpan}>Месяц аmoCRM</p></div>
        </div>

      </div>
      <button className={styles.button}>Получить консультацию</button>
    </div>
  )
}
export default Presents;