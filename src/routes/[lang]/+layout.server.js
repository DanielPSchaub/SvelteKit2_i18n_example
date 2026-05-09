import { redirect } from '@sveltejs/kit';
import { loadTranslations } from '$lib/i18n/loadTranslations';

export async function load({ params, route }) {
    return {
        lang: params.lang,
        t: await loadTranslations({params, route}) //necessary for layout.svelte, i.e. our navbar and footer
    };
}
