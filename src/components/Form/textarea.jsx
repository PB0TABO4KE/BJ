const Textarea = ({ }) => {
    return <div className="form__row">
        <label className="form__label" htmlFor="inp">Текст&nbsp;
            <span className="form__lbl_req">*</span>
        </label>
        <textarea rows={3} className="form__inp form__text" id="inp" required />
    </div>
}

export default Textarea;