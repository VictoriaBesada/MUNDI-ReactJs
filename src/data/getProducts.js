import productList from '../data/products';

const getById = (id, array) => array.find((e) => e.id === id);


const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
});

const getAllProductsFromDB = async () => {
    try {
      const result = await getProducts;
      return result;
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los viajes en este momento');
    }
};



const getProductById = async (id, setState) => {
    try {
      const result = await getProducts;
      setState(getById(id, result));
    } catch (error) {
      console.log(error);
    }
};
  
  export { getAllProductsFromDB, getProductById };
  
