import { Schema, model } from "mongoose"; // Mong ODM, intermediario Server-DB

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    size: {
      height: { type: Number, required: true },
      weight: { type: Number, required: true },
    },
    inStock: { type: Boolean, required: false },
    image: { type: String, required: true },
    // image: { data: Buffer, contentType: String }, // estos son los datos que Multer crea para las img
  },
  { versionKey: false, timestamps: true } // Las opciones van después del objeto del esquema. Cancela la última llave-valor de la versión de Mongo; Deja registro de la hora de creación.
);

export default model("product", productSchema);
