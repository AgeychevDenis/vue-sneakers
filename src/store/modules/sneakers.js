import axios from "axios";

export default {
   state: () => ({
      isLoading: false,
      data: [],
      valueQuery: '',
      cart: [],
      totalPrice: 0,
      favorite: []
   }),
   mutations: {
      setData(state, data) {
         state.data = data;
      },
      setLoading(state, bool) {
         state.isLoading = bool;
      },
      setValueQuery(state, valueQuery) {
         state.valueQuery = valueQuery;
      },
      addToCart(state, item) {
         const find = state.cart.find(obj => obj.id === item.id);

         if (find) {
            state.cart = state.cart.filter(obj => obj.id !== item.id);
            state.totalPrice -= item.price;
         } else {
            state.cart.push(item);
            state.totalPrice += item.price;
         }
      },
      addToFavorite(state, item) {
         const find = state.favorite.find(obj => obj.id === item.id);

         if (find) {
            state.favorite = state.favorite.filter(obj => obj.id !== item.id)
         } else {
            state.favorite.push(item)
            state.favorite.filter(obj => obj.isFavorite = true)
         }
      },
      removeItemCart(state, item) {
         let index = state.cart.indexOf(item);

         if (index > -1) {
            let product = state.cart[index];
            state.totalPrice -= product.price;
         }

         state.cart.splice(index, 1);
      },
   },
   actions: {
      async fetchSneakers({ commit }) {
         try {
            commit('setLoading', true);
            const res = await axios.get(
               "https://6391c7e9b750c8d178cd1a49.mockapi.io/items"
            );

            commit('setData', res.data)
         } catch (e) {
            console.log(e);
         } finally {
            commit('setLoading', false);
         }
      },
      addProductToCart({ commit }, cart) {
         commit('addToCart', cart);
      },
      addProductToFavorite({ commit }, favorite) {
         commit('addToFavorite', favorite);
      },
      removeProductToCart({ commit }, item) {
         commit('removeItemCart', item)
      }
   },
   getters: {
      sortArr(state) {
         return [...state.data].filter((item) =>
            item.title.toLowerCase().includes(state.valueQuery.toLowerCase())
         );
      },
   },
   namespaced: true
}