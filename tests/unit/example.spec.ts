import { createLocalVue } from '@vue/test-utils'
import VueCompositionApi from "@vue/composition-api";
import htmlStore from "@/compositions/html";

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueCompositionApi)
  it('renders props.msg when passed', () => {
    const html = htmlStore()
    expect(html.state.importantLinks[0].text).toEqual("Documentation")
  })
})
