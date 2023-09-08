
// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = { '/Chau': wrap({ asyncComponent: () => import('./Chau/Modul.svelte') }),};

export default routes;
