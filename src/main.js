import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import dayjs from 'dayjs';
import Notifications from 'notiwind';
import { load } from './composables/useConfig';
import App from './App.vue';
import ImageEditor from './pages/ImageEditor.vue';
import './index.css';

const config = load();

const routes = [
    {
        path: '/',
        component: ImageEditor,
        name: 'editor',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    if (to.path !== '/') {
        return false;
    }
});

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.config = config;

app.use(router);
app.use(Notifications);

app.mount('#app');
