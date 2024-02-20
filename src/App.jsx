import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AppLayout from "./AppLayout";
import Home from "./components/Home/index"
const routes=createBrowserRouter([
  {path:"/",element:<AppLayout/>,
children:[
  {path:"",element:<Home/>},
  {path:"/home",element:<Home/>},
  {path:"/cart",element:<Cart></Cart>}
]}
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}/> 

      </Provider>
    </>
  );
}

export default App;
