/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';


export const addItem = (komponenta, pocet_ks, cena_ks, cena_celkem) => {
  return {
    type: ADD_ITEM,
    komponenta,
    pocet_ks,
    cena_ks,
    cena_celkem
  };
};
