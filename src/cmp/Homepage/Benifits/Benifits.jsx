import "./Benifits.css";
import {
   Container,
   Row,
   Col
} from "react-bootstrap";


const data = [

{
	icon:"fa fa-home",
	title:"Interior Sktech",
	desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

},

{
	icon:"fa fa-edit",
	title:"Interior Sktech",
	desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

},
{
	icon:"fa fa-share",
	title:"Interior Sktech",
	desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

}


];


const List = (allData) => {

const  design = (
               <>
                  <div className="d-flex mb-4">
            <div>
            	<div className="icon-box d-flex justify-content-center align-items-center">
            		<i className={allData.listData.icon}></i>
            	</div>
            </div>

            	<div className="px-3">
            		<h6>{allData.listData.title}</h6>
            		<p>{allData.listData.desc} </p>
            	</div>
            </div>
               </>
              	);
              return design;


}

const Benifits = () => {

const design = (
<>
 <Container>
     <Row>
        <Col md="5" className="d-flex flex-column justify-content-center">
          {
             data.map( (item) => {
                 return <List  listData={item}/>
             })

         }

          
        </Col>

        <Col md="7" className="px-4">
           <img className="man-pic" src="man.jpg" width="90%" className="rounded-circle" />

        </Col>

     </Row>

 </Container>

</>

	);

return design;


}

export default Benifits;