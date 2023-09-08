
// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = { '/Odata': wrap({ asyncComponent: () => import('./Odata/Modul.svelte') }),};

export default routes;
