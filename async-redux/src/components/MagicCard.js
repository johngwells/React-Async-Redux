import React from 'react';

const MagicCard = ({ magic }) => {
  return (
    <div className='magic-container'>
      {Object.values(magic).map(card => (
        <div key={card.id} className='card-container'>
          <img src={card.imageUrl} alt={card.name} />
          <p>set: {card.setName}</p>
          <p>name: {card.name}</p>
          <p>color: {card.color}</p>
          <p>text: {card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default MagicCard;
