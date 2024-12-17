import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./context/Context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import {
  Home,
  DisplayComponent,
  CreateNewNote,
  Login,
  Profile,
} from "./pages/index.js";
import RequireAuth from "./auth/RequireAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Display",
        element: (
          <RequireAuth>
            <DisplayComponent />
          </RequireAuth>
        ),
      },
      {
        path: "/Create-New-Note",
        element: (
          <RequireAuth>
            <CreateNewNote />
          </RequireAuth>
        ),
      },
      {
        path: "/Profile",
        element: (
          <RequireAuth>
            <Profile />{" "}
          </RequireAuth>
        ),
      },
      {
        path: "/Log-in",
        element: <Login />,
      },
      // {
      //   path: "/Update-Note/:id",
      //   element: <UpdateNote />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
