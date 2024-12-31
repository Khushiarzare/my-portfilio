
import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MyRouter } from './Myrouter'
import App from './App'


createRoot(document.getElementById('root')).render(
<StrictMode>
    <RouterProvider router={MyRouter}>
<App/>
    </RouterProvider>

</StrictMode>,)
