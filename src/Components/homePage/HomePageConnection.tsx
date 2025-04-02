import HomePageButtonConnection from "./HomePageButtonConnection";
import HomePageInput from "./HomePageInput";
import HomePageTitleConnection from "./HomePageTitleConnection";

import "./HomePageConnection.css";

function HomePageConnection() {
  return (
    <div className="containerHomePageConnection">
      <HomePageTitleConnection />
      <HomePageInput />
      <HomePageButtonConnection />
    </div>
  );
}

export default HomePageConnection;
