import HomePageConnection from "../Components/homePage/HomePageConnection";
import HomePageInformation from "../Components/homePage/HomePageInformation";
import HomePageVerticalLigne from "../Components/homePage/HomePageVerticalLigne";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePagePricipal">
      <HomePageConnection />
      <HomePageVerticalLigne />
      <HomePageInformation />
    </div>
  );
}

export default HomePage;
