import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const ProductDetails = () => {
    const data = useLoaderData()
    return (
      <div className="w-4/5 mx-auto min-h-[75vh]">
        <h4 className="text-5xl text-start text-accent font-semibold mt-6 mb-2">
          {data[0]?.categoryname}
        </h4>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-3 mb-12">
          {data?.length > 0 ? (
            data?.map((dataItem, idx) => (
              <ProductCart key={idx} productcategory={dataItem}></ProductCart>
            ))
          ) : (
            <div className='text-center'>
              <p className="text-red-500 text-5xl text-center my-12">
                All item are sold{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProductDetails;