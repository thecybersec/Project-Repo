import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./cmp/Homepage/Homepage";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import {
 
 BrowserRouter,
 Switch,
 Route

} from "react-router-dom";

//make internal component




const Blog = () => {

    const design = (
   
   <h1>Welcome to blog</h1>

    );

    return design;
}


const Se = () => {

    const design = (
    <h1>welcome to software enginnering</h1>
    );
    return design;
}




const App = () => {

const design = (

<>

<BrowserRouter>

    <Header />
       <div>
          

           <Switch>

               <Route  exact path="/">
                    <Homepage  />
               </Route>

               <Route exact path="/blog">
                 <Blog />
               </Route>

               <Route exact path="/software-engineering">
                  <Se />
               </Route>

               <Route exact path="/web-development">
                  <h1>welcome to web development</h1>
               </Route>

           </Switch>

         
       </div>

  
</BrowserRouter>
  < />

  );
return design;

}

export default App;