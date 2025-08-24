import styles from './Button.module.css';
function Button({ text, icon, isoutline }) {

  //destructring
  return (
    <button   className={`${styles.btn}   ${isoutline ? styles.white_btn : styles.black_btn}`}>
      {icon}
      {text}
    </button>

  )
}

export default Button