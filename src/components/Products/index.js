import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { setProducts } from '../../state/actions/products';
import Loader from '../Loader';

const Products = () => {
  // getting/reading from store
  const products = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  // changing/updating from store
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productData =  ()=>{
    if(loading === true){
      return <Loader/>
    } else if(error){
      return <p>ERROR : {error}</p>
    } else {
      return products.map((product) => (
        <ProductCard
          key={Math.random()}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ));
      }
  }

  return (
    <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
      {productData()}
    </div>
  );
};

export default Products;