import Biggadd from "./Biggadd/Biggadd.jsx";
import { Button } from "react-bootstrap";
import Category from "./Category/Category.jsx";
import Benifits from "./Benifits/Benifits.jsx";

const Homepage = () => {

const design = (
<>

<Biggadd />
<Category />

<Benifits />
</>
	);

return design;

}

export default Homepage;