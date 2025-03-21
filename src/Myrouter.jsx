import { createBrowserRouter } from "react-router-dom"
import About from "./About"

import App from "./App"
import Home from "./Home"
import Cont from "./Cont"
import Project from "./Project"
export const MyRouter=createBrowserRouter(

    [
        

        {
            path:"",
            element:<App/>,
            children:[
                
              
                        {
                        path:"",
                        element:<Home/>,
                        },
                        {
                       path:"About",
                       element:<About/>,
                       },
                       {
                        path:"project",
                        element:<Project/>,
                        

                        
                       },
                       {
                       path:"cont",
                       element:<Cont/>
                      }
                    ]
                    }     

                

                
            
        
    ],
)