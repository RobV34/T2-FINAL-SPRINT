import './Styleicon.css'; 
import Homebutton from '../homebutton/Homebutton';

const Styleicon = ({title}) => {
  return (
    <div id='Styleicon'>
<h3>{title}</h3>

<div id='Styleicon-imagegrid'>
  <figure>
<img src='./images/oldfashionedclock.jpg' width={"300px"} height={"300px"}/>
<figcaption>Old-Fashioned</figcaption>
<Homebutton label={"Explore"}/>
</figure>


<figure>
<img src='./images/modernclock.jpg' width={"300px"} height={"300px"}/>
<figcaption>Retro</figcaption>
<Homebutton label={"Explore"}/>
</figure>


<figure>
<img src='./images/minimalclock.jpg' width={"300px"} height={"300px"}/>
<figcaption>Contemporary</figcaption>
<Homebutton label={"Explore"}/>
</figure>


</div>



    </div>
  )
}

export default Styleicon