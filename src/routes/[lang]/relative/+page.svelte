<script>
    let { data } = $props();
    const t = data.t.page;
</script>

<h1>{t.header}</h1>
<p>{t.description}</p>
<a href="relative/child">{t.linkChild}</a> <!-- IMPORTANT! Notice there's no '/' before the link! That's what makes it a relative link. If you want to use an absolute link you need to use LangLink -->

