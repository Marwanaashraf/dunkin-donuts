import { useNavigate } from "react-router-dom";
import { IDrink } from "../../Interfaces/drink";
type TDrinkProps = {
  product: IDrink;
};
export default function DrinkCard({ product }: TDrinkProps) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/drinks/${product.id}`);
      }}
      className="card group"
    >
      {/* image */}
      {product.discount == 10 ? (
        <img
          className="w-60 group-hover:scale-[1.1] duration-500 "
          src={product.image}
          alt={product.title}
        />
      ) : (
        <img
          className="w-36 group-hover:scale-[1.1] duration-500"
          src={product.image}
          alt={product.title}
        />
      )}

      {/* details */}
      <div className="mt-4">
        {/* title */}
        <h3>{product.title}</h3>
        {/* price */}
        {product.discount > 0 ? (
          <div className="flex space-x-1 justify-center">
            <del className="text-gray-300 dark:text-gray-600">
              {product.prices[0]}EGP
            </del>
            <p className="text-center">
              {Math.ceil(
                product.prices[0] - (product.prices[0] * product.discount) / 100
              )}
              EGP
            </p>
          </div>
        ) : (
          <p className="text-center">{product.prices[0]}EGP</p>
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
