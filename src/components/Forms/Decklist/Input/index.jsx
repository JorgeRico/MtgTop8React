function InputForm(props) {
    const { name, placeholder, label, value, handleChange } = props;

    return (
        <>
            <div className="left mb20 w-350">
                <label className="left w100 mb15">{label}</label>
                <input
                    className="left pad w80"
                    type='text'
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    required
                />
            </div>
        </>
    );
}

export default InputForm;