import { useRouter } from 'next/router'
import styles from './back.module.css'

export default () => {
  const router = useRouter()
  return <button className={styles.character__back} onClick={() => router.back()}>Go back</button>
}
