import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./Styles.css";
import Body from "./Components/Body";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";
import Head from "./Components/Head";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResultsPage from "./Components/SearchResultsPage";
import store from "./utils/store";
import ScrollToTop from "./utils/ScrollToTop";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },

      {
        path: "results",
        element: <SearchResultsPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="relative">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
