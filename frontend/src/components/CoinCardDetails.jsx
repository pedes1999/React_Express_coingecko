import React from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
const CoinCardDetails = ({
  name,
  currPrice,
  priceChange24h,
  priceChangePerc7d,
  priceChangePerc14d,
  priceChangePerc30d,
  priceChangePerc60d,
  priceChangePerc200d,
  priceChangePerc1y,
  highPrice,
  lowPrice,
  id,
}) => {
  //Function to Convert Price Percentage to Price Change
  const fromPercentageToChange = (perc) => {
    const priceChange = (perc / 100) * currPrice;
    return priceChange;
  };

  //Percentage to Price Change
  const priceChange7d = fromPercentageToChange(priceChangePerc7d);
  const priceChange14d = fromPercentageToChange(priceChangePerc14d);
  const priceChange30d = fromPercentageToChange(priceChangePerc30d);
  const priceChange60d = fromPercentageToChange(priceChangePerc60d);
  const priceChange200d = fromPercentageToChange(priceChangePerc200d);
  const priceChange1y = fromPercentageToChange(priceChangePerc1y);
  return (
    <>
      <div className="container-fluid bg-light text-dark rounded mt-5">
        <div className="row  mb-1">
          <div className="col-md-4">
            <h3>Current Price</h3>
          </div>
          <div className="col-md-4">
            <h3>Price High 24h</h3>
          </div>
          <div className="col-md-4">
            <h3>Price Low 24h</h3>
          </div>
        </div>
        <div className="row bg-dark rounded">
          <div className="col-md-4 display-6 text-info">{currPrice}$</div>

          <div className="col-md-4 display-6 text-success">{highPrice}$</div>
          <div className="col-md-4 display-6 text-danger">{lowPrice}$</div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Price Change 24h</h3>
          </div>
          <div className="col-md-4">
            <h3>Price Change 7d</h3>
          </div>
          <div className="col-md-4">
            <h3>Price Change 14d</h3>
          </div>
        </div>
        <div className="row bg-dark rounded">
          <div className="col-md-4 display-6">
            {priceChange24h > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange24h.toFixed(5)} ${" "}
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange24h.toFixed(4)}$
              </div>
            )}
          </div>
          <div className="col-md-4 display-6">
            {priceChange7d > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange7d.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange7d.toFixed(4)}$
              </div>
            )}
          </div>
          <div className="col-md-4 display-6">
            {priceChange14d > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange14d.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange14d.toFixed(4)}$
              </div>
            )}
          </div>
        </div>
        <div className="row  rounded">
          <div className="col-md-4">
            <h3>Price Change 30d</h3>
          </div>
          <div className="col-md-4">
            <h3>Price Change 60d</h3>
          </div>
          <div className="col-md-4">
            <h3>Price Change 200d</h3>
          </div>
        </div>
        <div className="row bg-dark rounded ">
          <div className="col-md-4 display-6 ml-5">
            {priceChange30d > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange30d.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange30d.toFixed(4)}$
              </div>
            )}
          </div>
          <div className="col-md-4 display-6">
            {priceChange60d > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange60d.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange60d.toFixed(4)}$
              </div>
            )}
          </div>
          <div className="col-md-4 display-6">
            {priceChange200d > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange200d.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange200d.toFixed(4)}$
              </div>
            )}
          </div>
        </div>

        <div className="row rounded ">
          <div className="col-md-3 offset-md-5">
            <h3>Price Change 1y</h3>
          </div>
        </div>
        <div className="row bg-dark rounded ">
          <div className="col-md-3 display-6 offset-md-5">
            {priceChange1y > 0 ? (
              <div className="text-success">
                <HiArrowUp size={40} style={{ marginBottom: "10px" }} />
                {priceChange1y.toFixed(5)}$
              </div>
            ) : (
              <div className="text-danger">
                <HiArrowDown size={40} style={{ marginBottom: "10px" }} />
                {priceChange1y.toFixed(4)}$
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCardDetails;
