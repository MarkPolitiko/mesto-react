import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
    setName("");
    setLink("");
  }

  function handleClose() {
    setName("");
    setLink("");
    onClose()
}

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title={"Новое место"}
      button={"Создать"}
    >
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_type_place"
          id="place-input"
          onChange={handleChangeName}
          name="name"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          title="Длина поля должна быть 2 и более символов и менее или равно 30"
          required
        />
        <span className="popup__input-error place-input-error popup__input-error_field_name"></span>
      </div>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_type_link"
          id="link-input"
          onChange={handleLinkChange}
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error link-input-error popup__input-error_field_link"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
