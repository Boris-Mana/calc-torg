export default function ChildrenRadioInItem({ key, name, value, text, isDisable, handlerOnChange }) {
    return (
        <label className={`filters__lable ${isDisable && "filters__lable_disabled"}`}>
            <input
                key={key}
                name={name}
                className="filters__input-radio"
                type="radio"
                value={value}
                // checked={currentValue === value}
                onChange={handlerOnChange}
                disabled={isDisable && 'disabled'}
            />
            {text}
        </label>
    );
}
