import conn from "@/lib/db";

export type VrstaMjenjaca = {
  id?: number;
  ime: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM vrstaMjenjaca");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM vrstaMjenjaca WHERE id = $1", [id]);
};

const add = async (vrstaMjenjaca: VrstaMjenjaca) => {
  return conn.query("INSERT INTO vrstaMjenjaca (ime) VALUES ($1)", [
    vrstaMjenjaca.ime,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM vrstaMjenjaca WHERE id = $1", [id]);
};

const vrstaMjenjaca = {
  getAll,
  get,
  add,
  remove,
};

export default vrstaMjenjaca;
