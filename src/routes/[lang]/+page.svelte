<script>
    import LangLink from '$lib/i18n/LangLink.svelte';

    let { data } = $props();
    const t = data.t.page; //t=translation text, but shortened so we don't die from carpal tunnel
    console.log(t);
</script>

<div class="mainWrapper">
    <h1>{t.pageTitle}</h1>
    <h2>{t.pageSubTitle}</h2>

    <div class="example green">
        <h3>{t.LangLink}</h3>
        <p>{t.LangLinkExplanation}</p>
        <LangLink href="/account" class="underline">{t.link}</LangLink>
    </div>

    <div class="example red">
        <h3>{t.relativeLink}</h3>
        <p>{t.relativeLinkExplanation}</p>
        <a></a>
    </div>

    <div class="example blue">
        <h3>{t.textVariables}</h3>
        <p>{t.textVariablesExplanation.replace("{variableWord}","cucumber")}</p>
    </div>

    <div class="example purple">
        <h3>{t.nestedText.header}</h3>
        <p>{t.nestedText.explanation}</p>
    </div>

    <div class="example brown">
        <h3>{t.changeLang}</h3>
        <p>{t.changeLangExplanation}</p>
        <div>
            <a href="/en/" data-sveltekit-reload>English</a>
            <a href="/fr/" data-sveltekit-reload>François</a>
        </div>
    </div>

    <div class="example lime">
        <h3>{t.addLang}</h3>
        <p>{t.addLangExplanation}</p>
    </div>

</div>

<style>
    .mainWrapper{
        display:flex;
        flex-direction:column;
    }
    .example{
        display:flex;
        flex-direction:column;
        border: solid;
        margin-bottom: 10px;
    }
    .green{ border-color: green; }
    .red{ border-color: red; }
    .blue{ border-color: blue; }
    .purple{ border-color: purple; }
    .brown{ border-color: brown; }
    .lime{ border-color: lime; }
</style>
