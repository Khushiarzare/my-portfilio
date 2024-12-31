
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { MyRouter } from './Myrouter'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={MyRouter}/>
</React.StrictMode>)