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
                label && (
                    <label className={"field__label " + (!valueNull ? " field__label-opened" : "")}>{label}</label>
                )
            }
            <input className={"field__input " + (!valueNull ? "field__input-opened" : "")} type={type} value={value} onChange={(e) => { setValue(e.target.value )}}/>
        </div>
    );
};

export default Field;