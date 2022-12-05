import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import QuiPage from './Components/QuizPage/QuiPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
       
        {
          path:"/",
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics> 
        },
        {
          path:"/Topics",
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics> ,
          
        },
        {
          path:"/:name/:id",
          loader:async({params})=>{
            return( await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`))
            
          },
          element:<QuiPage></QuiPage>
        },
        
        {
          path:"/Statistics",
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics> 
        },
        {
          path:"/Blog",
          element: <Blog></Blog>
        }
      ],
    },
    {
      path:'*',
      element:<NotFoundPage></NotFoundPage>
    }
  ])
  
  return (
   <div>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
   </div>

  );
}

export default App;
