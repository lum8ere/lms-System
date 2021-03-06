import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import ObjectPage from "./pages/ObjectPage";
import SubObjectPage from "./pages/SubObjectPage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, LOGIN_ROUTE, OBJECT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SUBOBJECT_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
      },
      {
        path: LOGIN_ROUTE,
        Component: Auth,
      },
      {
        path: REGISTRATION_ROUTE,
        Component: Auth,
      },
      {
        path: OBJECT_ROUTE + '/:id',
        Component: ObjectPage,
      },
      {
        path: SUBOBJECT_ROUTE + '/:id',
        Component: SubObjectPage,
      },
];
