function TextareaForm({ name, placeholder, label, value, handleChange }) {
    return (
        <>
            <label className="left w100 mb15">{label}</label>
            <textarea
                className="left w80 mb20"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
            />
        </>
    );
}

export default TextareaForm;