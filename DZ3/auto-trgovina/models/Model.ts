import conn from "@/lib/db";

export type model = {
  id?: number;
  ime: string;
  tip_vozila_id: number;
  marka_id: number;
};

const getAll = () => {
  return conn.query("SELECT * FROM model");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM model WHERE id = $1", [id]);
};

const add = async (model: model) => {
  return conn.query(
    "INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ($1, $2, $3)",
    [model.ime, model.tip_vozila_id, model.marka_id]
  );
};

const remove = (id: number) => {
  return conn.query("DELETE FROM model WHERE id = $1", [id]);
};

const model = {
  getAll,
  get,
  add,
  remove,
};

export default model;
