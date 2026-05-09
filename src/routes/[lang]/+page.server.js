import { loadTranslations } from '$lib/i18n/loadTranslations';

export async function load({parent, params, route}) {
    const parentData = await parent(); //necessary to get the session and user data from our layout.server.js, otherwise it gets overwritten when we return our own page-specfic load()
    return {
        ...parentData,
        t: await loadTranslations({params, route})
    };
}
