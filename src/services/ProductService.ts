import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  // console.log('addProudct...', data);

  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price
    });
    
    // console.log(result);

    if (result.success) {
      throw new Error('Datos no validos');
    }
  } catch (error) {
    console.log(error);
  }
};