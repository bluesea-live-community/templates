import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./main.css";
import { ChakraProvider } from '@chakra-ui/react'
import { TemplatesIndex } from './templates';
import { ViewAllTemplate } from './templates/view_all';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatesIndex/>,
  },
  {
    path: "view_all",
    element: <ViewAllTemplate />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
