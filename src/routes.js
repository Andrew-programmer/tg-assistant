import {FORM_ROUTER, PRODUCT_LIST_ROUTER} from "./static";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const routes = [
    {
        path: PRODUCT_LIST_ROUTER,
        Component: ProductList
    },
    {
        path: FORM_ROUTER,
        Component: Form
    }
]

export default routes
