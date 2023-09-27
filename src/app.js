import express from "express";
import productsRoutes from "./routes/products.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", productsRoutes);

//Si no paso por ninguna de las anteriores rutas que envie not foun en vez del html
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;