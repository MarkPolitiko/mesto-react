function PopupWithForm(props) {
  return (
    <div
      className={props.isOpen ? "popup popup_show" : "popup"}
      onClick={props.onClose}
    >
      <div className="popup__content">
        <legend className="popup__title">{props.title}</legend>
        <form
          className={`popup__form popup__form_${props.name}`}
          name={props.name}
          noValidate
        >
          {props.children}
          <button
            className={`popup__save-button popup__save-button_${props.name}`}
            id="submit-button"
            name={props.name}
            type="submit"
          >
            {props.button}
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
