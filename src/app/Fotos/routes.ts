
// @ts-nocheck
import { wrap } from 'svelte-spa-router/wrap'

const routes = { '/Fotos': wrap({ asyncComponent: () => import('./Fotos/Modul.svelte') }),};

export default routes;
