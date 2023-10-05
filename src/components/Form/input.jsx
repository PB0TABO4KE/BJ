const Input = ({ }) => {
    return <div className="form__row">
        <label className="form__label" htmlFor="inp">Текст&nbsp;
            <span className="form__lbl_req">*</span>
        </label>
        <input className="form__inp" id="inp" required/>
    </div>
}

export default Input;