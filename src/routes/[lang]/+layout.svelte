<script>
    import LangLink from '$lib/i18n/LangLink.svelte';
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    //Sets the language for accessibility reasons, but we have to wait for html to exist before we set the tag on it
    const lang = $derived(page.params.lang);
    onMount( () => { document.documentElement.lang = data.lang; });

    let { data, children } = $props();
    const t = data.t.global; //Notice how we use 'global' instead of 'page' here, because we're in the layout file
</script>

<header>
    <nav>
        <LangLink class="" href="/" >{t.nav.Home}</LangLink>
        <LangLink class="" href="/LangLink">{t.nav.LangLink}</LangLink>
        <LangLink class="" href="/relative">{t.nav.relative}</LangLink>
        <LangLink class="" href="/login">{t.nav.login}</LangLink>
    </nav>
</header>

<main>
    {@render children()}
</main>

<footer>
    <p>{t.footer.replace("{year}", new Date().getFullYear())}</p>
    <div>
        <a href="/en/" data-sveltekit-reload>English</a>
        <a href="/fr/" data-sveltekit-reload>François</a>
    </div>
</footer>

<style>
    nav{
        display:flex;
        flex-direction:row;
        gap: 4rem;
    }
    footer{
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:2rem;
    }
</style>
