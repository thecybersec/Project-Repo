import "./Header.css";

import { useState } from "react";

import {
   Navbar,
   Container,
   Nav,
   NavDropdown


} from "react-bootstrap";

import { Link } from "react-router-dom";
import Menu from "../../json-api/Menu.json";
import Brand from "../../json-api/Brand.json";

const NormalMenu =  (data) => {
const design = (
<>

<Link style={{color:data.color}} className={data.menuInfo.button ? "nav-link btn btn-primary text-white" : "nav-link"} to={data.menuInfo.url}>{data.menuInfo.label}</Link>

</>


	);
    return design;
}



const DropdownMenu = (data) => {

const design = (
    <>

<NavDropdown title={data.menuInfo.label} id="basic-nav-dropdown">
      <i className="fa fa-caret-up arrow-up"> </i>

           {
             data.menuInfo.dropdownMenu.map( (item) => {
             	return <NormalMenu color= "black" menuInfo={item}  key={item.id}/>
             })



           }
        </NavDropdown>      

    </>

	);
return design;
}


const Header = () => {
   
    const [sticky , chnageStickyData] = useState("py-2 border-bottom fixed-top");
       
     window.onscroll = () => {
     	let tmp= "";
     let top = window.scrollY;
     if(top > 100)
     {
     	tmp = "py-3 border-bottom fixed-top sticked";
     }

     else{

     	  tmp = "py-3 border-bottom fixed-top";
     }
     return chnageStickyData(tmp);
 }

	const design = (
         <>
          
     <Navbar expand="lg" className={sticky}>

			  <Container>
			   
			    <Link to="/" className="navbar-brand">
			    <img src={Brand.logo} width="40" />
			    {Brand.name}
			    </Link>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="justify-content-end w-100">
			        {
			        	Menu.map( (data) => {
			        		if(data.dropdown == true)
			        		{
			        		  	return <DropdownMenu  menuInfo={data} key ={data.id} />
			        		}
                      return <NormalMenu color="white" menuInfo={data} />
			        		
			        	})
			        }
			     
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
     </Navbar>


         </>

		);

	return design;

}

export default Header;