import './Trendingicon.css'; 
import Homebutton from "../homebutton/Homebutton";

const Trendingicon = ({title, titleadditional, img1, img2, img3, img4}) => {
  const redText = {
    color: "#B1010D"
  }; 
  return (

    <div id='Trendingicon'>
      <div id='Trending-title-btn'>
        <h4>{title} <span style={redText}>{titleadditional}</span></h4>
        <Homebutton label={"Begin your design"} /> 
        </div>

        <div id='Trendingicon-imagegrid'>

<img src={img1} width={"225px"} height={"225px"}/>

<img src={img2} width={"225px"} height={"225px"}/>

<img src={img3} width={"225px"} height={"225px"}/>

<img src={img4} width={"225px"} height={"225px"}/>

</div>

    </div>
  )
}

export default Trendingicon