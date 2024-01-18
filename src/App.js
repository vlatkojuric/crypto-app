import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./components/Coin";

//add routes and add individual page for a coin
//add a favorites page
//maybe a navbar to navigate to favorite page and home page

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  //using the useEffect hook to display the data imediately on the page and using the dependany array to prevent it looping
  useEffect(() => {
    axios
      .get("https://openapiv1.coinstats.app/coins", {
        headers: {
          accept: "application/json",
          "X-API-KEY": "pVVDBw112Hhkp+h4NwfV7dQzGqe3KWPQAFW3Wpa5yzI=",
        },
      })
      .then((response) => {
        setListOfCoins(response.data.result);
        console.log(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => setSearchWord(event.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => (
          <Coin
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            symbol={coin.symbol}
            key={coin.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
