import { createHashRouter } from "react-router-dom";
import FontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import MoreProduct from "../pages/MoreProduct";
import NotFoundPage from "../pages/NotFoundPage";


const router =createHashRouter([
    {
        path:'/',
        element: <FontLayout/>,
        children:[
          {
            path:'',
            element:<HomePage />
          },
          {
            path:'products',
            element:<ProductPage />
          },
          {
            path:'products/:id',
            element:<MoreProduct />
          },
          {
            path:'cart',
            element:<CartPage />
          },
        ]
    },
    {
            path:'*',
            element:<NotFoundPage />
    }
])

export default router;

/*1.路由表是藉由createHashRouter方法去建構，最外層是陣列去包覆著物件，物件中包含path(路徑)及element(元件)
  2.請記得引入"createHashRouter"及 "export default router"
*/