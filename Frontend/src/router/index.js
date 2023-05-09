import { createRouter, createWebHistory } from 'vue-router'

import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import SignUp from "../components/SignUp.vue"
import Login from "../components/Login.vue"
import SearchProduct from "../views/product/SearchProduct.vue"
import AddCategory from "../views/Category/AddCategory.vue"
import EditCategory from "../views/Category/EditCategory.vue"
import Category from "../views/Category/Category.vue"
import Admin from "../views/Admin.vue"
import Product from "../views/Product/Product.vue"
import EditProduct from "../views/Product/EditProduct.vue"
import AddProduct from "../views/Product/AddProduct.vue"
import Voucher from "../views/Voucher/Voucher.vue"
import AddVoucher from "../views/Voucher/AddVoucher.vue"
import ShowDetails from "../views/product/ShowDetails.vue"
import Cart from "../views/Cart.vue"
import ListProduct from "../views/category/ListProduct.vue"
import EditVoucher from "../views/Voucher/EditVoucher.vue"
// import Success from '../views/payment/Success';
// import Failed from '../views/payment/Failed';
// import Checkout from '../views/Checkout/Checkout';
import Success from "../views/payment/Success.vue"
import Failed from "../views/payment/Failed.vue"
import Checkout from '../views/checkout/Checkout.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/product/search/:keyword',
        name: "Result",
        component: SearchProduct
    },
    // sign up and signin
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/login',
        component: Login
    },
    // admin category
    {
        path: '/admin/category/add',
        component: AddCategory
    },
    {
        path: '/admin/category/edit/:id',
        name: 'EditCategory',
        component: EditCategory
    },
    {
        path: '/admin/category',
        name: "Category",
        component: Category
    }, {
        path: '/category/show/:categoryName',
        name: 'ListProduct',
        component: ListProduct
    },
    //admin home page
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    // admin product
    {
        path: '/admin/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/admin/product/add',
        component: AddProduct
    },
    {
        path: '/admin/product/edit/:id',
        name: 'EditProduct',
        component: EditProduct
    },
    // admin voucher
    {
        path: '/admin/voucher',
        name: "Voucher",
        component: Voucher
    },
    {
        path: '/admin/voucher/add',
        component: AddVoucher
    },

    {
        path: '/admin/voucher/edit/:id',
        name: 'EditVoucher',
        component: EditVoucher
    },
    // show details of product
    {
        path: '/product/show/:id',
        name: 'ShowDetails',
        component: ShowDetails
    },
    // show product in category
    {
        path: '/category/show/:categoryName',
        name: 'ListProduct',
        component: ListProduct
    },
    // cart
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    // sucess and fail pages
    {
        path: '/payment/success',
        name: 'PaymentSuccess',
        component: Success,
    },

    {
        path: '/payment/failed',
        name: 'PaymentFail',
        component: Failed,
    },

    // checkout

    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router