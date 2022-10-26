import Back from './back'
import Context from './context'
import Episodes from './episodes'
import Footer from '../../widgets/footer'
import Header from '../../widgets/header'
import Main from './main'
import { Storage } from './storage'
import styles from './character.module.css'

export default ({ character }) =>
  <Context.Provider value={{ character }}>
    <div className={styles.character}>
      <Header />
      <Back />
      <main className={styles.character__main}>
        <Main />
        <Episodes />
      </main>
      <Footer />
    </div>
  </Context.Provider>


export async function getServerSideProps(context) {
  const character = await Storage(context.query.id)
  return { props: { character } }
}