<script>
    let {data, form} = $props(); //to listen to return values from form. Automatic from sveltekit
    const t = data.t.page;

    let mode = $state("login"); // "login", "signup", "reset"
    let title = $state(t.pageTitle_login);
    let desc = $state(t.pageDesc_login);
    let loading = $state(false);
    let email = $state("");
    let password = $state("");

    function changeMode( newMode ){
        mode = newMode;
        if( newMode === 'login'){
            title = t.pageTitle_login;
            desc = t.pageDesc_login;
        }
        else if( newMode === 'signup'){
            title = t.pageTitle_signup;
            desc = t.pageDesc_signup;
        }
        else if( newMode === 'reset'){
            title = t.pageTitle_reset;
            desc = t.pageDesc_reset;
        }
    }
</script>

<div>
    {#if data.invite}
    <header>
        <h1>{t.pageTitle_invited.replace("{name}",inviteeName)}</h1>
        <h2>{t.pageDesc_invited.replace("{validator}", data.invite.email)}</h2>
    </header>
    {:else}
    <header>
        <h1>{title}</h1>
        <p>{desc}</p>
    </header>
    {/if}

    <form method="POST" action={"?/" + mode}>
        {#if mode == 'signup'}
        <div>
            <label for="first_name">{t.label_firstName}</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder={t.placeholder_firstName}/>
        </div>
        <div>
            <label for="last_name">{t.label_lastName}</label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder={t.placeholder_lastName}/>
        </div>
        {/if}
        <div>
            <label for="email">{t.label_email}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.placeholder_email}
              bind:value={email}/>
        </div>
        {#if mode !== 'reset'}
        <div>
            <label for="password">{t.label_password}</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              bind:value={password}/>
        </div>
        {/if}
        <button
          type="submit"
          aria-live="polite"
          disabled={loading}
        >
            <span>{loading ? "Loading..." : title}</span>
        </button>
        <div>
            <!-- These need to stay as <a> tags and not <LangLink>, because they're not to a different page -->
            {#if mode !== 'login'}
            <a href="#top" onclick={() => changeMode('login')}>{t.link_login}</a>
            {/if}
            {#if mode !== 'signup'}
            <a href="#top" onclick={() => changeMode('signup')}>{t.link_signup}</a>
            {/if}
            {#if mode !== 'reset'}
            {/if}
        </div>
    </form>

    {#if form?.error}
        <p>{form.error}</p>
    {/if}
    {#if form?.success}
        <p>{title + " " + t.success}</p>
    {/if}
</div>
