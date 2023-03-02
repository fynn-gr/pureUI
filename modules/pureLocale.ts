export class pureLocale {
    language :string;
    path :string;
    obj :object;

    constructor(language :string, path = "./local") {
        this.language = language;
        this.path = path;

        fetch(`/locale/${language}.json`)
        .then((res) => {
            this.obj = res;
        })
    }

    _(key :string) {
        try {
            return this.obj.key;
        } catch (error) {

        }
    } 
}