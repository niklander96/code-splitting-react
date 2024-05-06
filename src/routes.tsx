import { createBrowserRouter } from "react-router-dom";

import { MainComponent } from "./components/MainComponent";
import { Suspense, lazy } from "react";

const AboutComponent = lazy(async () => ({default: (await import('./components/AboutComponent')).AboutComponent}))

/**
 * Создает роутер для навигации между страницами
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent />,
    },
    {
        path: 'about',
        element: <Suspense fallback={'...loading'}><AboutComponent/></Suspense>,
    }
]);