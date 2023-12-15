import './Homebutton.css'; 
import { Link } from 'react-router-dom';


const Homebutton = ({label}) => {

  const HomebtnLink = {
    color: "white",  
    fontSize: ".9rem", 
    fontWeight: "700",
    backgroundColor: "#594A45",
    border: "none",
    borderRadius: "20px",
    padding: "8px 20px",  
    marginTop: "3%",
    textDecoration: "none"
  }

  return (
    <div id='Homebutton'>
    <Link to='./store' style={HomebtnLink}>{label}</Link> 
    </div>
  )
}

export default Homebutton; 