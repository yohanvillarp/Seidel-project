import './Home.css'
import banner from '../assets/banner-navideño.jpg'
import Banner from '../components/Banner/Banner';

const HomeView = () => {


  return (
    <div className="home">
      <div className="home__banner">
        <Banner imgBanner={banner} />
      </div>
    </div>
  );
};

export default HomeView;