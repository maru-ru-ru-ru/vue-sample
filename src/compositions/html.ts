import {reactive} from '@vue/composition-api';

class htmlClass {
  public text: string
  public href: string
  constructor(text: string, href: string) {
    this.text = text
    this.href = href
  }
}
class htmlStoreClass {
  public ecosystem: Array<htmlClass>
  public importantLinks:  Array<htmlClass>
  public whatsNext: Array<htmlClass>
  constructor() {
    this.ecosystem = new Array<htmlClass>()
    this.ecosystem.push(new htmlClass('vuetify-loaderA','https://github.com/vuetifyjs/vuetify-loader'))
    this.ecosystem.push(new htmlClass('github','https://github.com/vuetifyjs/vuetify'))
    this.ecosystem.push(new htmlClass('awesome-vuetify','https://github.com/vuetifyjs/awesome-vuetify'))
    this.importantLinks = new Array<htmlClass>()
    this.importantLinks.push(new htmlClass('Documentation','https://vuetifyjs.com'))
    this.importantLinks.push(new htmlClass('Chat','https://community.vuetifyjs.com'))
    this.importantLinks.push(new htmlClass('Made with Vuetify','https://madewithvuejs.com/vuetify'))
    this.importantLinks.push(new htmlClass('Twitter','https://twitter.com/vuetifyjs'))
    this.importantLinks.push(new htmlClass('Articles','https://medium.com/vuetify'))
    this.whatsNext = new Array<htmlClass>()
    this.whatsNext.push(new htmlClass('Explore components','https://vuetifyjs.com/components/api-explorer'))
    this.whatsNext.push(new htmlClass('Select a layout','https://vuetifyjs.com/getting-started/pre-made-layouts'))
    this.whatsNext.push(new htmlClass('Frequently Asked Questions','https://vuetifyjs.com/getting-started/frequently-asked-questions'))
  }
}

export default function htmlStore() {
  const state = reactive(new htmlStoreClass());

  return {
    get state() {
      return state;
    },
  };
}

export type HtmlStore = ReturnType<typeof htmlStore>;