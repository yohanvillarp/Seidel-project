import './Home.css'
import banner from '../assets/banner-navideño.jpg'
import Banner from '../components/Banner/Banner';

const HomeView = () => {


  return (
    <div className= "home">
      <div className="home__banner">
        <Banner imgBanner={banner} />
      </div>
      <div className='home__promociones'>
        <h2 className='home__promociones--title'>
          Promociones
        </h2>

        <p className='home__promociones--text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Doloremque, voluptas, doloremque, quos, consequuntur, ipsa, dolores, voluptatibus, asperiores, fugiat, laborum, quibusdam, eaque.
        </p>

      </div>
    </div>
  );
};

export default HomeView;