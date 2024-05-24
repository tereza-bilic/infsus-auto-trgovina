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

const add = (oprema: Oprema) => {
  return conn.query("INSERT INTO oprema (opis) VALUES ($1)", [oprema.opis]);
};

const update = (id: number, oprema: Oprema) => {
  return conn.query("UPDATE oprema SET (opis) = ($1) WHERE id = $2", [
    oprema.opis,
    id,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM oprema WHERE id = $1", [id]);
};

const oprema = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default oprema;
