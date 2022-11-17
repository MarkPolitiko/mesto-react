function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="elements__card">
      <img
        src={card.link}
        className="elements__image"
        alt={card.name}
        onClick={handleClick}
      />
      <button className="elements__delete-button" aria-label="Удалить"></button>
      <div className="elements__description">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button
            className="elements__like-button"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
