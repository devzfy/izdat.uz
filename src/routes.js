import { createBrowserRouter } from "react-router-dom";
import {UniqueEdition, Home , About, Writers, WriterSingle, SaleEvents, BookSeries} from "./pages";


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
    }
])