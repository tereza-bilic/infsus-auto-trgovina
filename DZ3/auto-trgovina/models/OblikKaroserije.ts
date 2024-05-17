import conn from "@/lib/db";

export type OblikKaroserije = {
  id?: number;
  opis: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM oblikKaroserije");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM oblikKaroserije WHERE id = $1", [id]);
};

const add = async (oblikKaroserije: OblikKaroserije) => {
  return conn.query("INSERT INTO oblikKaroserije (opis) VALUES ($1)", [
    oblikKaroserije.opis,
  ]);
};

const remove = (id: number) => {
  return conn.query("DELETE FROM oblikKaroserije WHERE id = $1", [id]);
};

const oblikKaroserije = {
  getAll,
  get,
  add,
  remove,
};

export default oblikKaroserije;
