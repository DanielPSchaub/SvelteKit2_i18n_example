import { loadTranslations } from '$lib/i18n/loadTranslations';
import { redirect } from '@sveltejs/kit';

export async function load({parent, url, params, route}){
    return {
        t: await loadTranslations({params, route})
    };
}

export const actions = {
    login: async ({ locals, request, params }) =>  {
        throw redirect(302, `/${params.lang}`) //redirect to home
    },

    signup: async ({locals, request, url, params }) => {
        throw redirect(302, `/${params.lang}`) //redirect to home
    }
};
