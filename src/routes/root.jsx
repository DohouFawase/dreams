import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/layouts";
import HomePage from "../pages/homepage";
import Video from "../pages/video"
import Presentation from "../pages/presentation"
import Programme from "../pages/programme"
import Spearker from "../pages/spearker";
import Sponsor from "../pages/sponsor";

const root = createBrowserRouter([
          {
            path: '/',
            element: <Layouts />,
            children:[
                {
                    path: "",
                    element: <HomePage />
                },
                {
                  path:"/video",
                  element: <Video />
                },
                {
                  path:"/presentation",
                  element: <Presentation />
                },
                {
                  path:"/programme",
                  element: <Programme />
                },

                {
                  path:"/spekers",
                  element: <Spearker />
                },

                 {
                  path:"/sponsor",
                  element: <Sponsor />
                },
            ]
          }
])



export default root