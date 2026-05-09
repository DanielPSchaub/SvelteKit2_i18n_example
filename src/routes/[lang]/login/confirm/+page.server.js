import { loadTranslations } from '$lib/i18n/loadTranslations';

export async function load({params, route}){
    console.log("login/confirm: load() entered");
    return{
        t: await loadTranslations({params, route})
    }
}
