import conn from "@/lib/db";

export type Favorit = {
  id?: number;
  oglas_id: number;
  korisnik_id: number;
};

const getAll = () => {
  return conn.query("SELECT * FROM favoriti");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM favoriti WHERE id = $1", [id]);
};

const getByKorisnikId = (korisnik_id: number) => {
  return conn.query("SELECT * FROM favoriti WHERE korisnik_id = $1", [
    korisnik_id,
  ]);
};

const add = (favorit: Favorit) => {
  return conn.query(
    "INSERT INTO favoriti (oglas_id, korisnik_id) VALUES ($1, $2)",
    [favorit.oglas_id, favorit.korisnik_id]
  );
};

const remove = (id: number) => {
  return conn.query("DELETE FROM favoriti WHERE id = $1", [id]);
};

const favorit = {
  getAll,
  get,
  getByKorisnikId,
  add,
  remove,
};

export default favorit;
