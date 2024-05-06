import Index from './components/index'
import Quiz from './components/Quiz'
import Result from './components/Result'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { CheckUserExist } from './helper/helper'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Index />
    },
    {
      path:'/quiz',
      element: <CheckUserExist><Quiz/></CheckUserExist>
    },
    {
      path: '/quiz/result',
      element: <CheckUserExist><Result /></CheckUserExist>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
