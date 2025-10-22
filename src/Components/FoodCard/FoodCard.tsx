import React from "react";
import { IFood } from "../../Interfaces/food";
import { useNavigate } from "react-router-dom";
type TFoodProps = {
  product: IFood;
  productType: string;
};
export default function FoodCard({ product, productType }: TFoodProps) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/foods/${product.id}`);
      }}
      className="card group"
    >
      {/* image */}
      <img
        className="w-28 group-hover:scale-[1.1] duration-500"
        src={product.image}
        alt={product.title}
      />
      {/* details */}
      <div className="mt-4">
        {/* title */}
        <h3>{product.title}</h3>
        {/* price */}
        {product.discount > 0 ? (
          <div className="flex space-x-1 justify-center">
            <del className="text-gray-300 dark:text-gray-600">
              {product.price}EGP
            </del>
            <p className="text-center">
              {Math.ceil(
                product.price - (product.price * product.discount) / 100
              )}
              EGP
            </p>
          </div>
        ) : (
          <p className="text-center">{product.price}EGP</p>
        )}
      </div>
      {product.discount > 0 ? (
        <div className="discout">
          <span>{product.discount}%</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
