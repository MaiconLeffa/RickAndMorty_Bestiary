import styles from './footer.module.css'
import toTop from './toTop'

export default () =>
  <footer className={styles.footer}>
    <button onClick={() => toTop()} className={styles.footer__totop} />
    <span>Powered by Maicon Leffa</span>
  </footer>