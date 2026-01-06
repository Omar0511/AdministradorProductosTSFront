import {
  Form,
  Link,
  useNavigate,
  redirect,
  type ActionFunctionArgs,
} from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  // console.log('DEsde actions product details', params.id);

  if (params.id !== undefined) {
    await deleteProduct(+params.id);

    return redirect("/");
  }
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>

      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>

      <td className="p-3 text-lg text-gray-800">
        {product.availability ? "Disponible" : "No Disponible"}
      </td>

      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex  gap-2 items-center">
          <button
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
            // onClick={() => navigate(`/productos/${product.id}/editar`, {
            //   state: {
            //     product
            //   }
            // })}
            onClick={() => navigate(`/productos/${product.id}/editar`)}
          >
            Editar
          </button>

          {/* <Link
            // ubicación
            to={`/productos/${product.id}/editar`}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </Link> */}

          {/* <button>Eliminar</button> */}

          {/* <Link className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">
            Eliminar
          </Link> */}

          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm('¿Eliminar?')) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};
