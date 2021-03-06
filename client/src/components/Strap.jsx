import React from 'react';

const Strap = props => {
  const isSelected = props.strap.isSelected;
  const handleClick = () => props.clickHandler(props.strap.index, props.strap.strap_price, props.strap.strap_name);
  return (
    <span className="summary-strap-options" onClick={handleClick}>
      {isSelected ? 
        <span>
          <img className="summary-strap-image" src={props.strap.strap_image}/>
          <div className="summary-strap-price-selected">ADDED!</div>
          <div className="summary-strap-name-selected">{props.strap.strap_name}</div>
          <div className="summary-strap-checkbox-selected"></div>
        </span>
        :
        <span>
          <img className="summary-strap-image" src={props.strap.strap_image}/>
          <div className="summary-strap-price">+ ${props.strap.strap_price}</div>
          <div className="summary-strap-name">{props.strap.strap_name}</div>
          <div className="summary-strap-checkbox"></div>
        </span>
      }
    </span>
  )
}

export default Strap;