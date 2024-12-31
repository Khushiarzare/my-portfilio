import { createBrowserRouter } from "react-router-dom"
export const MyRouter=createBrowserRouter(

    [
        {
            path:"",
            element:<App/>,
            children:[
                {
                  path:"header",
                  element:<Header/>

                }
            ]
        }
    ]
)