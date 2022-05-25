import Footer from '../../widgets/footer'
import Head from '../../elements/head'
import Header from '../../widgets/header'
import Provider from './homeContext/provider'
import Shelf from './shelf'
import styles from './home.module.css'

export default () =>
  <Provider>
    <Head />
    <div className={styles.container}>
      <Header />
      <main className={styles.home__main}>
        <Shelf />
      </main>
      <Footer />
    </div>
  </Provider>