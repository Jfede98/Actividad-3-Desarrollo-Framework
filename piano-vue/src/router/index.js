import { createRouter, createWebHistory } from "vue-router";
import PagesInicio from "@/Pages/Inicio/PagesInicio.vue";
import PagesAcusticos from "@/Pages/Acusticos/PagesAcusticos.vue";
import PagesDigitales from "@/Pages/Digitales/PagesDigitales.vue";
import PagesSuscribete from "@/Pages/Suscribete/PagesSuscribete.vue";

const routes = [
  { path: "/", name: "inicio", component: PagesInicio },
  { path: "/acusticos", name: "acusticos", component: PagesAcusticos },
  { path: "/digitales", name: "digitales", component: PagesDigitales },
  { path: "/suscribete", name: "suscribete", component: PagesSuscribete },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
