import SearchPage from "./components/SearchPage.tsx";
import DetailsPage from "./components/DetailsPage.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/details/:countryId",
    element: <DetailsPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <main id="main-root">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
