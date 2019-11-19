import Home from "pages/Home";
import SearchResults from "pages/products/pages/SearchResults";
import ProductDetail from "pages/products/pages/ProductDetail";

const routes = [
  {
    path: '/',
    name: 'Search box',
    Component: Home
  },
  {
    path: '/items',
    name: 'Search results',
    Component: SearchResults
  },
  {
    path: '/items/:id',
    name: 'Product detail',
    Component: ProductDetail
  }
];

export default routes;