import { loadTranslations } from '$lib/i18n/loadTranslations';

export async function load({params, route}){
    return {
        t: await loadTranslations({params, route})
    };
}
