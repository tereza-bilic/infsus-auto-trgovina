import conn from "@/lib/db";

export type Oprema = {
  id?: number;
  opis: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM oprema");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM oprema WHERE id = $1", [id]);
};

const add = async (oprema: Oprema) => {
  return conn.query("INSERT INTO oprema (opis) VALUES ($1)", [oprema.opis]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM oprema WHERE id = $1", [id]);
};

const oprema = {
  getAll,
  get,
  add,
  remove,
};

export default oprema;
