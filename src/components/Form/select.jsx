const Select = ({values}) => {
    return <select>
        {values.map(el => <option key={el}>{el}</option>)}
    </select>
}

export default Select;