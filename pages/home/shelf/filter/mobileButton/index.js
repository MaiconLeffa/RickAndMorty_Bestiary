import styles from './mobileButton.module.css'

export default ({ onPress, visible }) =>
  <button opened={visible.toString()} onClick={onPress} className={styles.mobileButton} />
