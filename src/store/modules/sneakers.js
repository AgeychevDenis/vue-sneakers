import axios from "axios";

export default {
   state() {
      return {
         isLoading: false,
         sneakers: [],
         valueQuery: ''
      }
   },

   actions: {
      async fetchSneakers({ commit }) {
         try {
            commit('setLoading', true);
            const res = await axios.get(
               "https://6391c7e9b750c8d178cd1a49.mockapi.io/items"
            );

            commit('setSneakers', res.data)
         } catch (e) {
            console.log(e);
         } finally {
            commit('setLoading', false);
         }
      },
   },
   mutations: {
      setSneakers(state, sneakers) {
         state.sneakers = sneakers;
      },
      setLoading(state, bool) {
         state.isLoading = bool;
      }
   },
   getters: {
      sortArr(state) {
         return [...state.sneakers].filter((item) =>
            item.title.toLowerCase().includes(state.valueQuery)
         );
      },
   },
   namespaped: true
}