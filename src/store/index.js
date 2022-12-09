import { createStore } from 'vuex';
import sneakers from './modules/sneakers';

export const store = createStore({
   state() {
      return {
         show: false
      }
   },
   modules: {
      sneakers
   }
})