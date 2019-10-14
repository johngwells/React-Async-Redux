import React from 'react';

const MagicCard = ({ magic }) => {
  return (
    <>
      <p>{magic[0].name}</p>
      <img src={magic[0].imageUrl} alt={magic.name} />
    </>
  )
}

export default MagicCard;
