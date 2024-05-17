import conn from "@/lib/db";

export type Marka = {
  id?: number;
  ime: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM marka");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM marka WHERE id = $1", [id]);
};

const add = (marka: Marka) => {
  return conn.query("INSERT INTO marka (ime) VALUES ($1)", [marka.ime]);
};

const update = (id: number, marka: Marka) => {
  return conn.query("UPDATE marka SET (ime) = ($1) WHERE id = $2", [
    marka.ime,
    id,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM marka WHERE id = $1", [id]);
};

const marka = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default marka;
