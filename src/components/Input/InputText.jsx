import style from './InputText.module.css'

const InputText = (props) => {

    return (
        <input {...props} className={style.input} />
    )
}

export default InputText