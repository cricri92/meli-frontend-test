export const NEW_PRODUCT = 'new';
export const USED_PRODUCT = 'used';
export const ONE_SELLED_PRODUCT = 'one_selled';
export const MULTIPLE_SELLED_PRODUCTS = 'one_selled';

const ONE_SELLED_PRODUCT_TEXT = 'vendido';
const MULTIPLE_SELLED_PRODUCTS_TEXT = 'vendidos';

const PRODUCT_CONDITIONS = {
  [NEW_PRODUCT]: {
    displayName: 'Nuevo',
  },
  [USED_PRODUCT]: {
    displayName: 'Usado'
  },
  [ONE_SELLED_PRODUCT]: {
     displayName: ONE_SELLED_PRODUCT_TEXT
  },
  [MULTIPLE_SELLED_PRODUCTS]: {
    displayName: MULTIPLE_SELLED_PRODUCTS_TEXT
  }
};

export default PRODUCT_CONDITIONS;