import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login.vue";
import Front from "@/views/Front.vue";
import Home from "@/views/Home.vue";
import Page1 from "@/views/Page1.vue";
import CapturePhoto from "@/views/CapturePhoto.vue";
import Page2 from "@/views/Page2.vue";
import Page3 from "@/views/Page3.vue";
import DivRegion from "@/components/DivRegion.vue";
import Page4 from "@/views/Page4.vue";
import Page6 from "@/views/Page6.vue";
import Setting from "@/views/Setting.vue";


const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/front'
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
                component: Page1,
            },
            {
                path: '/page2',
                component: Page2,
            },
            {
                path: '/page3',
                component: Page3,
            },
            {
                path: '/page4',
                component: Page4,
            },
            {
                path: '/page5',
                component: Page6
            },
            {
                path: '/page6',
                component: Setting
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router