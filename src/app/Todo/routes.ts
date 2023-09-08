// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = {
    '/Todo': wrap({ asyncComponent: () => import('./Todo/Modul.svelte') }),
};

export default routes;
