
// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = { '/Cards': wrap({ asyncComponent: () => import('./Cards/Modul.svelte') }),};

export default routes;
