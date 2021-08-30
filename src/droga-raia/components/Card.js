// import React from "react";

// const Card = ({ item, channel }) => {
//     return (
//       <li className="card">
//         <a
//           href={`https://www.youtube.com/watch?v=${item.id}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="card-link"
//         >
//           <img src={item.image} alt={item.title} className="card-image" />
//           <img src={item.image} alt={item.title} className="channel-image" />
//           <h4 className="card-title">{item.title}</h4>
//           <p className="card-channel">
//             <i>{channel}</i>
//           </p>
//           <div className="card-metrics">
//             {item.views} &bull; {item.published}
//           </div>
//         </a>
//       </li>
//     );
//   };

//   export default Card;

import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #fff;

  .card {
    &__header {
      background: ${(props) => props.color};
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
    }

    &__img-wrapper {
       margin: 0 auto;
    }

    &__img {
      max-width: 100%;
      display: block;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
      margin: 0;
      margin-top: 2rem;
      text-align: center;
    }

    &__content {
      background: ${({ theme }) => theme.toggleBorder};
      font-size: .9rem;
      padding: 1rem;
      font-weight: 300;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__show-more {
      overflow-y: ${(props) => (props.showOverflow ? "scroll" : "hidden")};
      max-height: 3rem;
      line-height: 1.25;
    }

    &__footer {
      padding: 1rem;
      text-align: right;
      font-size: 1.2rem;
    }

    &__action {
      background ${(props) => props.color};
      color: #fff;
      border: none;
      padding: .5rem;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;

function CardText(props) {
  const showTextOnly = props.item.text; // && !showOverflow;

  if (showTextOnly) {
    return <p>{props.item.text}</p>;
  }

  return (
    <p className="card__show-more">
      {props.item.text}
      {props.item.showMoreText}
    </p>
  );
}

function Card(props) {
  console.log("Card: ", props);

  const [showOverflow, setShowOverflow] = useState(false);
  const toggleShowOverflow = () => {
    console.log("toggleShowOverflow: ", showOverflow);
    setShowOverflow(!showOverflow);
  };

  return (
    <CardWrapper
      color={props.item.color}
      className="card"
      showOverflow={showOverflow}
    >
      <div className="card__header">
        <div className="card__img-wrapper">
          <img className="card__img" src={props.item.image} alt="plataform" />
        </div>
        <p className="card__title">{props.item.title}</p>
      </div>
      <div className="card__content">
        <CardText {...props} />
      </div>
      <div className="card__footer">
        <button
          onClick={
            props.item.showMoreText ? toggleShowOverflow : props.item.action
          }
          className="card__action"
        >
          {props.item.btnText}
        </button>
      </div>
    </CardWrapper>
  );
}

export default Card;
