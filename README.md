# SvelteKit2_i18n_example
SveletKit v2 doesn't have native localization/i18n, and the community i18n is for an earlier version, so I made this custom lightweight i18n for switching languages

## Overview 
i18n is tech speak for the very practical need of 'our website needs to support multiple languages'. This example shows one such way to support multiple languages

## Implementations
At it's core, we want different text strings for different languages.

### /en/ vs ?lang=en
Two practical ways to set language, there are pros and cons to both. In this example, we're using the /en/ way, hence the [lang] route you'll see, and the neccessary 'params' attribute from sveltekit.

### Text files are located with the code
OOP has a terrible habit of spreading out code for one action across multiple directories and locations, making it hard to remember where everything sits. Not here. The text/language files sit right with the code and the page they're meant to be on.

### Params attribute
SvelteKit proviodes us the params attribute to our server-side code, which will tell us whatever [lang] was set to, ex. 'en' or 'fr'. We then use that given lang param to load the corresponding language file, and provide it to the front-end, which is set up with variable names for all the text.

### Links
Links are atrociously hard to maintain lang state with, so we created some helpers.

#### Absolute links:
To keep us from having to manually alter each of our <a> tags, we created LangLink. LangLink is a wrapper for an <a> tag and works the exact same as an <a> tag, but it smartly prepends the correct current language so that isn't lost in the transition.
Ex. 

#### Relative links:
When you're on a page and you want to redirect to an subpage, like going from login to login->confirm, since the page you're going too isn't something you have to traverse backwards for, to see you can use a relative link. A relative link means you keep the <a>, and you make sure the href starts with a letter **and not a /** mark. 
Ex. `href="confirm"` is correct. `href="/confirm"` is not a relative link and will send you back to the main directory *without* the lang param active, which is a no-no.
