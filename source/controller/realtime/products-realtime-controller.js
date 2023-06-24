//@ts-check
//importando las funciones de la carpeta services
import { productApiService } from "../../services/apis/products-api-service.js";

export const productRealtimeController = {
  index: async function (req, res) {
    try {
      console.log("cliente conectado a la lista de productos");
      const products = await productApiService.getAllProducts();
      return res.render("realtime-views/real-time-products", { title: "Lista de productos", products: {products} });

    } catch (error) {
      return res
        .status(500)
        .json({
          status: "error",
          msg: "something went wrong",
          data: { error },
        });
    }
  },
};

