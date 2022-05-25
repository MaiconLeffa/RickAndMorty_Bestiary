import styles from './radiobutton.module.css'

export default ({ label, checked, onChange }) =>
  <label className={styles.radio} onClick={() => onChange()}>
    <input type="radio" checked={checked} onChange={() => { }} />
    {label}
  </label>