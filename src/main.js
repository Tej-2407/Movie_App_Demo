import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router';
// import { API_TOKEN } from "./config/env"

const app = createApp(App);

app.use(Antd).use(router).mount('#app');