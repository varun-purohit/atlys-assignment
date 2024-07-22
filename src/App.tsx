import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
- home page ho hoga wo login page hoga wo design karo saath me hi register page bhi ussi me
- login aur register ke validations banao react forms use kar lo yaa seperate validations banao
- fir ek main page desin karna hai 
- usme kahi bhi click karo apne ko modal kholna hai login yaa register wala
*/
