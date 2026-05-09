<script>
    import LangLink from '$lib/i18n/LangLink.svelte';
    let { data } = $props();
    const t = data.t.page;
</script>

<h1>{t.header}</h1>
<p>{t.description}</p>
<LangLink href="/">{t.linkHome}</LangLink>
