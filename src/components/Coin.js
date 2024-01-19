export default function Coin({ name, icon, symbol, price }) {
  return (
    <div className="coin">
      <h1>Name : {name} </h1>
      <img src={icon} alt="icon for each crypto" />
      <h3>Price : {price} $ </h3>
      <h3>Ticker : {symbol} </h3>
    </div>
  );
}
