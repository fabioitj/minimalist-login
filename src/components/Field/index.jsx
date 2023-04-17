import "./styles.scss";

const isNull = (el) => {
    return el == null || el == undefined || el == "";
};

function Field({
    type,
    label,
    value,
    setValue
}) {

    const valueNull = isNull(value)

    return (
        <div className="field">
            {
                label && valueNull && (
                    <label className="field__label">{label}</label>
                )
            }
            <input className="field__input" type={type} value={value} onChange={(e) => { setValue(e.target.value )}}/>
        </div>
    );
};

export default Field;