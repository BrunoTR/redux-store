import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import {PizzaState, reducer, getPizzas, getPizzasLoaded, getPizzasLoading} from "./pizzas.reducer";

export interface ProductsState {
  pizzas: PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: reducer,
  };

//products state
export const getProductsState = createFeatureSelector<ProductsState>('products');

//pizza state
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

//
export const getAllPizzas = createSelector(getPizzaState, getPizzas);
export const getLoadedPizzas = createSelector(getPizzaState, getPizzasLoaded);
export const getLoadingPizzas = createSelector(getPizzaState, getPizzasLoading);

