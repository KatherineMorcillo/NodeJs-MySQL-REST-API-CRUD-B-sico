import { pool } from "../db.js";

//Listar todos los productos

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
//Listar solo un producto
export const getProduct = async (req, res) => {
  try {
    //Para probar posibles errores
    //throw new Error("Error inesperado");
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Somethins goes wrong",
    });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, price } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO products (name, price) VALUES (?,?)",
      [name, price]
    );
    res.send({
      id: rows.insertId,
      name,
      price,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM products WHERE id = ?", [
      req.params.id,
    ]);

    if (result.afecctedRows <= 0)
      return res.status(404).json({
        message: "Product not found",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.satus(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE products SET name = IFNULL(?, name), price = IFNULL(?, price)  WHERE ID = ?",
      [name, price, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Products not found",
      });

    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
