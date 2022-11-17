import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handlePopupClose(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close-button")
    ) {
      closeAllPopups();
    }
  }

  return (
      <div className="body">
        <div className="page" /* onKeyDown={handlePopupClose} */>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <ImagePopup card={selectedCard} onClose={handlePopupClose} />
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={handlePopupClose}
            title={"Редактировать профиль"}
            button={"Сохранить"}
          >
            <div className="popup__input-container">
              <input
                className="popup__input popup__input_type_name"
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                title="Длина поля должна быть 2 и более символов и менее или равно 40"
                required
              />
              <span className="popup__input-error nameInput-error popup__input-error_field_name"></span>
            </div>
            <div className="popup__input-container">
              <input
                className="popup__input popup__input_type_description"
                id="descriptionInput"
                name="about"
                type="text"
                placeholder="Род деятельности"
                minLength="2"
                maxLength="200"
                title="Длина поля должна быть 2 и более символов и менее или равно 200"
                required
              />
              <span className="popup__input-error descriptionInput-error popup__input-error_field_description"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={handlePopupClose}
            title={"Новое место"}
            button={"Создать"}
          >
            <div className="popup__input-container">
              <input
                className="popup__input popup__input_type_place"
                id="place-input"
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
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error link-input-error popup__input-error_field_link"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={handlePopupClose}
            title={"Обновить аватар"}
            button={"Сохранить"}
          >
            <div className="popup__input-container">
              <input
                className="popup__input popup__input_type_link"
                id="avatar"
                name="avatar"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error avatarInput-error popup__input-error_field_link"></span>
            </div>
          </PopupWithForm>
        </div>
      </div>
  );
}

export default App;
