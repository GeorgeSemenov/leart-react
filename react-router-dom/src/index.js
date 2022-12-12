import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root, {
  loader as rootLoader,//Импортируем кроме компонента Root ещё и созданную нами функцию для подгрузки данных (loader)
  action as rootAction
} from "./routes/root.jsx";
import ErrorPage from './routes/error-page.jsx';
import Contact from './routes/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader: rootLoader,//функция созданная нами для подгрузки данных (контактов)
    action: rootAction,//указываем импортирумую функцию action из root.js теперь она будет срабатывать при отправке формы
    children:[
      {
        path: "contacts/:contactId",
        element: <Contact/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
