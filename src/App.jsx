import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./wrappers/Layout"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Verify from "./pages/Verify"
import Login from "./pages/Login"
import { Provider } from "react-redux"
import store from "./redux/app/store"
import Dashboard from "./wrappers/Dashboard"
import AllQuotes from "./components/AllQuotes"
import Favorites from "./components/Favourites"
import Logout from "./components/Logout"

const routes = [{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "verify",
      element: <Verify />
    },
    {
      path: "login",
      element: <Login />
    }
  ]
},
{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      index: true,
      element: <AllQuotes />
    },
    {
      path: "favorites",
      element: <Favorites />
    },
    {
      path: "logout",
      element: <Logout />
    }
  ]
}
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>

  )
}

export default App