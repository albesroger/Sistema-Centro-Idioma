import type { Response, Request } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { name, lastname, email, password, credencial } = req.body;

  const user = await User.findOne({
    where: { [Op.or]: { email: email, credencial: credencial } },
  });

  if (user) {
    return res.status(400).json({
      msg: `Usuario ya existe con email: ${email} o crecencial ${credencial}`,
    });
  }

  console.log("Estoy por aqui");
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    User.create({
      name: name,
      lastname: lastname,
      email: email,
      password: passwordHash,
      credencial: credencial,
    });
    res.json({
      msg: `User ${name} ${lastname} created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      msg: `Existe un error al crear un usuario con el nombre ${name} ${lastname}`,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await User.findOne({
    where: { email: email },
  });

  if (!user) {
    return res.status(400).json({
      msg: `Usuario no existe con email: ${email}`,
    });
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password incorrecta ${password}`,
    });
  }

  const token = jwt.sign(
    { email: email },
    process.env.SECRET_KEY || `Jdz237797TH1dp7zjFzM`
    //{ expiresIn: "10000" }
  );

  res.json({ token });
};
