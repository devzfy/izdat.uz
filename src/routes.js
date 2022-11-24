import { createBrowserRouter } from "react-router-dom";
import {Work,Basket,Auction,Delivery,Partners,SpellCheck,Rating,RatingSingle,UniqueEdition, Home , About, Writers, WriterSingle, SaleEvents, BookSeries, SeriesSingle, SingleWork, SinglePrint, Print} from "./pages";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/writers',
        element: <Writers/>
    },
    {
        path:'/writers/:id',
        element: <WriterSingle/>
    },
    {
        path:'/edition',
        element: <UniqueEdition/>
    },
    {
        path:'/sale',
        element: <SaleEvents/>
    },
    {
        path:'/book-series',
        element: <BookSeries/>
    },
    {
        path: '/book-series/1',
        element: <SeriesSingle/>
    },
    {
        path: '/rating',
        element: <Rating/>
    },
    {
        path: '/rating/book',
        element: <RatingSingle/>
    },
    {
        path: '/rating/author',
        element: <RatingSingle/>
    },
    {
        path: '/rating/publishing',
        element: <RatingSingle/>
    },
    {
        path: '/auction',
        element: <Auction/>
    },
    {
        path: '/spell-checking',
        element: <SpellCheck/>
    },
    {
        path: '/partners',
        element: <Partners/>
    }
    ,
    {
        path: '/delivery',
        element: <Delivery/>
    }
    ,
    {
        path: '/work',
        element: <Work/>
    },
    {
        path: '/work/1',
        element: <SingleWork/>
    },
    {
        path: '/print',
        element: <Print/>
    },
    {
        path: '/print/1',
        element: <SinglePrint/>
    },
    {
        path: '/basket',
        element: <Basket/>
    }
])