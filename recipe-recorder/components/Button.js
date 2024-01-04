import styles from './button.module.css'

const Button = ({ text, onClick }) => {
    return (
      <button
        className={styles.button}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;