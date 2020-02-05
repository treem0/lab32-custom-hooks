import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, status }) => (
  <article>
    <div>
      <div>
        <img src={image}>
        </img>
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{status}</h3>
      </div>
    </div>
  </article>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Character;
