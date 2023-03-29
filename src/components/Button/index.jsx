import "./styles.scss";

function Button({callback, children}) {

    return (
        <button className="button" onClick={callback}>
            {children}
        </button>
    );
}

export default Button;