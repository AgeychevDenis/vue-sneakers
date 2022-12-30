import axios from "axios";

export default {
   state: () => ({
      isLoading: false,
      data: [],
      valueQuery: '',
      cart: [],
      totalPrice: 0,
      taxPrice: 0,
      favorite: [],
      totalOrder: []
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
            state.taxPrice = (state.totalPrice / 100 * 5).toFixed(1);
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
            state.taxPrice = (state.taxPrice - item.price / 100 * 5).toFixed(1);
         }

         state.cart.splice(index, 1);
      },
      addToOrder(state) {
         state.totalOrder = [...state.cart];
      },
      removeAllCart(state) {
         state.cart.splice(0, state.cart.length);
         state.totalPrice = 0;
         state.taxPrice = 0;
      }
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
      },
      addProductToOrder({ commit }) {
         commit('addToOrder')
      },
      removeAllCart({ commit }, item) {
         commit('removeAllCart', item)
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