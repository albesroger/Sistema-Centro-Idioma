import type { Response, Request } from "express";
import { Product } from "../models/product.js";

export const registerProduct = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  Product.create({
    name: name,
    description: description,
    status: 1,
  });

  res.json({
    msg: `Product ${name} created successfully`,
  });
};

export const getProducts = async (_req: Request, res: Response) => {
  const listProduct = await Product.findAll();
  res.json(listProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  Product.destroy({
    where: { id: id },
  });

  res.json({
    msg: `Product ${id} deleted successfully`,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  Product.update(
    {
      name: name,
      description: description,
    },
    {
      where: { id: id },
    }
  );

  res.json({
    msg: `Product ${id} updated successfully`,
  });
};
