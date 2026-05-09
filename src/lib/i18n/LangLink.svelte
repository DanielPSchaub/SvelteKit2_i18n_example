<script>
    import { page } from '$app/state';
    let { href = '', children, ...attributes } = $props();
    const lang = $derived(page.params.lang);
    const localizedHref = $derived( `/${lang}${href.startsWith('/') ? href : `/${href}`}` );
</script>

<a href={localizedHref} {...attributes}>
	{@render children()}
</a>
