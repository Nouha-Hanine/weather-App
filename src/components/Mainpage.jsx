import { useState } from "react";
import "./Mainpage.css";
import AdviceButton from "./AdviceButton.jsx";
import Background from "./Background.jsx";
import Header from "./Header.jsx";
import WeatherCard from "./WeatherCard.jsx";
import DisplayBluetooth from "./DisplayBluetooth.jsx";
import AroundConstantine from "./AroundConstantine.jsx";
import PredictCard from "./PredictCard.jsx";
import GeneralAdvice from "./GeneralAdvice.jsx";
import Greetings from "./Greetings.jsx";
function Mainpage() {
  //TODO need to add use state par rapport au background
  //TODO must add heat index and dew point (from temperature and humidity)
  //TODO add usestatecontext for weather display?
  const [backgroundState, setBackgroundState] = useState("cloudy");
  const [dataAvailable, setDataAvailable] = useState(true);
  //TODO add to displatybluetooth button change on true to generzte weather card
  //TODO arranger l'affichage depending on the displaybluetooth btn (including generaladvice)
  return (
    <div>
      {" "}
      
      <Greetings />
      {!dataAvailable && <DisplayBluetooth />}
      {dataAvailable && (
        <div>
          <Background backgroundState="sunny" />
          <AdviceButton />
          <main className="weather-card-container">
            <WeatherCard
              temperature="20"
              humidity="13" /**should be {weather.humidity etc.} */
              windSpeed="23"
              pressure="9"
            />
          </main>
        </div>
      )}
      <GeneralAdvice />
      <div className="second-part-page">
        <AroundConstantine temperature={9} />

        <PredictCard />
      </div>
    </div>
  );
}

export default Mainpage;