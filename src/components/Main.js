import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then((data) => {
        const [formData, cards] = data;
        setUserAvatar(formData.avatar);
        setUserName(formData.name);
        setUserDescription(formData.about);
        setCards(cards);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__description">
          <div className="profile__image-content" onClick={onEditAvatar}>
            <img
              src={userAvatar}
              className="profile__image"
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__status">
            <div className="profile__naming">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </div>
  );
}

export default Main;
