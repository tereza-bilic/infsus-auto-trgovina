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

const add = (vrstaMotora: VrstaMotora) => {
  return conn.query("INSERT INTO vrstaMotora (ime) VALUES ($1)", [
    vrstaMotora.ime,
  ]);
};

const update = (id: number, vrstaMotora: VrstaMotora) => {
  return conn.query("UPDATE vrstaMotora SET (ime) = ($1) WHERE id = $2", [
    vrstaMotora.ime,
    id,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM vrstaMotora WHERE id = $1", [id]);
};

const vrstaMotora = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default vrstaMotora;
