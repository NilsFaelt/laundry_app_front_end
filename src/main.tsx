import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/login/Login";
import MyBookings from "./components/myBookings/MyBookings";
import CreateUser from "./components/createUser/CreateUser";
import AllUsers from "./components/getAndUpdateUsers/AllUsers";
import CalendarComp from "./components/calendar/Calendar";
import Laundryrooms from "./components/laundryRooms/LaundryRooms";
import Forum from "./components/forum/Forum";
import MyInfo from "./components/myInfo/MyInfo";
import Root from "./components/root/Root";
import "./index.css";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import ImportantMesage from "./components/importantMesage/ImportantMesage";
import Quiz from "./components/quiz/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "myBooking",
        element: <MyBookings />,
      },
      {
        path: "calendar",
        element: <CalendarComp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createUser",
        element: <CreateUser />,
      },
      {
        path: "myinfo",
        element: <MyInfo />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "forum",
        element: <Forum />,
      },
      {
        path: "laundryrooms",
        element: <Laundryrooms />,
      },
      {
        path: "reminder",
        element: <ImportantMesage />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </HelmetProvider>
);
