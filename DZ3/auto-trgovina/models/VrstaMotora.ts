import conn from "@/lib/db";

export type VrstaMotora = {
  id?: number;
  ime: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM vrstaMotora");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM vrstaMotora WHERE id = $1", [id]);
};

const add = async (vrstaMotora: VrstaMotora) => {
  return conn.query("INSERT INTO vrstaMotora (ime) VALUES ($1)", [
    vrstaMotora.ime,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM vrstaMotora WHERE id = $1", [id]);
};

const vrstaMotora = {
  getAll,
  get,
  add,
  remove,
};

export default vrstaMotora;
