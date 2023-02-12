import style from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button className={style.button} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
