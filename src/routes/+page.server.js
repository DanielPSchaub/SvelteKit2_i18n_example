import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
    throw redirect(302, "/en");
}
