import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
const CoinCard = ({
  image,
  name,
  symbol,
  price,
  highPrice,
  lowPrice,
  id,
  priceChangePercentage,
}) => {
  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <Link to={`/coins/${id}`}>
              <h1>{name}</h1>
            </Link>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price text-info">${price}</p>
            <p className="coin-h-24 green">${highPrice.toFixed(4)}</p>
            <p className="coin-l-24 red">${lowPrice.toFixed(4)}</p>
            {priceChangePercentage > 0 ? (
              <p className="coin-price green">
                <HiArrowUp />
                {priceChangePercentage.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-price red">
                <HiArrowDown />
                {priceChangePercentage.toFixed(3)}%
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
