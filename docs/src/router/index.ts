import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue";
import Graph from "../views/Graph.vue";
import Table from "../views/Table.vue";
import Scale from '../views/Scale.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => Home
        },
        {
            path: "/graph",
            name: "graph",
            component: () => Graph
        },
        {
            path: "/table",
            name: "table",
            component: () => Table
        },
        {
            path: "/scale",
            name: "scale",
            component: () => Scale
        }
    ]
})

export default router
