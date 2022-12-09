import axios from "axios";

export default {
   actions: {
      async fetchSneakers(ctx) {
         try {
            this.isLoading = true;
            const res = await axios.get(
               "https://6391c7e9b750c8d178cd1a49.mockapi.io/items"
            );
            this.sneakers = await res.data;

            ctx.commit('updateSneakers', res.data)
         } catch (e) {
            alert("Ошибка ", e);
         } finally {
            this.isLoading = false;
         }
      },
   },
   mutations: {
      updateSneakers(state, sneakers) {
         state.sneakers = sneakers;
      }
   },
   state() {
      return {
         sneakers: []
      }
   },
   getters: {
      allSneakers(state) {
         return state.sneakers;
      }
   }
}