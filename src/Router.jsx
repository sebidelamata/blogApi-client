import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import App from './App'
import AllPosts from './AllPosts'


const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/posts/all_posts",
            element: <AllPosts />
        },
    ])

    return <RouterProvider router={router}/>
}

export default Router