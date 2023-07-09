import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login.vue";
import Front from "@/views/Front.vue";
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Accordion from "@/components/Accordion.vue";
import FrontBottom from "@/components/FrontBottom.vue";
import Home from "@/views/Home.vue";
import Pchart from "@/components/Pchart.vue";
import Bchart from "@/components/Bchart.vue";
import Lchart from "@/components/Lchart.vue";
import Bubble from "@/components/Bubble.vue";
import Letter from "@/components/Letter.vue";
import Page1 from "@/views/Page1.vue";
import CapturePhoto from "@/views/CapturePhoto.vue";
import Ripple from "@/components/Ripple.vue";
import Page2 from "@/views/Page2.vue";
import DragDiv from "@/components/DragDiv.vue";
import Page3 from "@/views/Page3.vue";
import DivRegion from "@/components/DivRegion.vue";


const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/front',
        component: Front
    },
    {
        path: '/test',
        component:DivRegion
    },
    {
        path: '/face',
        component:CapturePhoto
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path: '/page1',
                component: Page1
            },
            {
                path: '/page2',
                component: Page2
            },
            {
                path: '/page3',
                component: Page3
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router