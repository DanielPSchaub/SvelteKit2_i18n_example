import { redirect } from '@sveltejs/kit';

//Cannot have any variables/dynamic casting here
const moduleMap = { 
    en: import.meta.glob('/src/routes/**/*en.json'),
    fr: import.meta.glob('/src/routes/**/*fr.json')
};

const basePath = "/src/routes";
export async function loadTranslations({ params, route }) {
    console.log("loadTranslations:",{params, route});
    const lang = params.lang;
    const langModules = moduleMap[lang];
    //console.log("langModules",langModules);
    if (!langModules) {
        console.log(`Unsupported language: ${lang}`);
        throw redirect(302, '/en'); //Should be 404, but we need to redirect them to a valid language or every link is screwed
    }

    const globalPath = `${basePath}/[lang]/global_${lang}.json`; //the [lang] is because it's very literal
    const global = (await langModules[globalPath]()).default;

    const pagePath = `${basePath}${route.id}/${lang}.json`; //${route.id} includes a preceding '/'
    const page = langModules[pagePath] ? (await langModules[pagePath]()).default : {};

    return { global, page };
}
