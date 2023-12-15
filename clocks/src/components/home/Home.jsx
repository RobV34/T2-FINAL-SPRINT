import { Link } from 'react-router-dom';
import Slideshow from "../slideshow/Slideshow";
import Clock from "../clock/Clock";
import Styleicon from "../styleicon/Styleicon";
import Trendingicon from "../trendingicon/Trendingicon";
import Slideshowinfo from "../slideshowinfo/Slideshowinfo";
import './Home.css'; 

const Home = ({images}) => {

  const redTitle = "Now Trending: Hello,"; 

  const heading = [ 'Time for a new look?', 'Free Shipping until the New Year!', 'Running low on time?']; 
  const info = [ 'Customize your clock to fit any room, any style and any budget.', `Don't delay - put in your order today.`, 'Check out current trends to help you get started.']; 
  const btn = [ 'Get Started', 'Visit the Design Store', 'View Trends']; 

  const HomeFamousClocksLink = {
    fontFamily: "Avenir", 
    fontWeight: "600",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "rgba(252, 252, 253, 0.25)",
    border: "none", 
    borderRadius:"20px",
    padding: "1.5%", 
    marginLeft: "25%",
    maxWidth: "35%",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center"
  }


  return (
    <div id="Home-body">

    <div id="Home-slideshow">

      <Slideshow images={images}/> 

      <div id="Home-overlay">
        <Slideshowinfo heading={heading} info={info} btn={btn} /> 
        
        <div id="Home-overlay-clock">
        <Clock />
        </div>
      </div>

      </div>

      <Styleicon title={"What's Your Style"}/> 

      <Trendingicon title={redTitle} titleadditional={"Red"} img1={'./images/redclock1.jpg'} img2={'./images/redclock2.jpg'} img3={'./images/redclock3.jpg'} img4={'./images/redclock4.jpg'} /> 
      <Trendingicon title={"Now Trending: Less is More"} img1={'./images/lessmoreclock1.jpg'} img2={'./images/lessmoreclock2.jpg'} img3={'./images/lessmoreclock3.jpg'} img4={'./images/lessmoreclock4.jpg'}/> 

      <div id="Home-famous-clocks">
        <img src="./images/BigBen.jpg" width= {"50%"} height={"240px"}/>
        <div id="Home-famous-clocks-info">
          <h3>Big Ben. Big Deal!</h3>
          <p>The ten most famous clocks in the world.</p>
          <Link to='https://hermleclock.com/blogs/news/timekeeping-masterpieces-the-top-10-most-iconic-clocks-in-the-world' 
          target='_blank'
          style={HomeFamousClocksLink}>Get Inspired</Link>
        </div>

      </div>
     
    </div>
  );
};

export default Home;
