import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ResearchPage from "./pages/ResearchPage.vue";
import ApartmentDetails from "./pages/ApartmentDetails.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path      : '/',
            name      : 'home',
            component : HomePage,
        },
        {
            path      : '/about',
            name      : 'about-us',
            component : AboutUs,
        },
        {
            path      : '/research',
            name      : 'research',
            component : ResearchPage,
        },
        {
            path      : '/research/:slug',
            name      : 'apartment-details',
            component : ApartmentDetails,
        },
    ],
});

export { router };