import {InjectionKey} from '@vue/composition-api';
import {HtmlStore} from '@/compositions/html';

const HtmlKey: InjectionKey<HtmlStore> = Symbol('HtmlStore');
export default HtmlKey;