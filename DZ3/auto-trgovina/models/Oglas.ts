import conn from "@/lib/db";

export type Oglas = {
  id?: number;
  naslov: string;
  model_id: number;
  kilometraza: number;
  snaga_kw: number;
  godina_proizvodnje: number;
  oblik_karoserije_id: number;
  vrsta_motora_id: number;
  vrsta_mjenjaca_id: number;
  objavio_korisnik_id: number;
  datum_objave: Date;
  cijena: number;
};

const getAll = () => {
  return conn.query("SELECT * FROM oglas");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM oglas WHERE id = $1", [id]);
};

const add = (oglas: Oglas) => {
  return conn.query(
    "INSERT INTO oglas (" +
      "naslov, model_id, kilometraza, snaga_kw, godina_proizvodnje, " +
      "oblik_karoserije_id, vrsta_motora_id, vrsta_mjenjaca_id" +
      "objavio_korisnik_id, datum_objave, cijena" +
      ") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [
      oglas.naslov,
      oglas.model_id,
      oglas.kilometraza,
      oglas.snaga_kw,
      oglas.godina_proizvodnje,
      oglas.oblik_karoserije_id,
      oglas.vrsta_motora_id,
      oglas.vrsta_mjenjaca_id,
      oglas.objavio_korisnik_id,
      oglas.datum_objave,
      oglas.cijena,
    ]
  );
};

const update = (id: number, oglas: Oglas) => {
  return conn.query(
    "UPDATE oglas SET (" +
      "naslov, model_id, kilometraza, snaga_kw, godina_proizvodnje, " +
      "oblik_karoserije_id, vrsta_motora_id, vrsta_mjenjaca_id" +
      "objavio_korisnik_id, datum_objave, cijena" +
      ") = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)" +
      "WHERE id = $12",
    [
      (oglas.naslov,
      oglas.model_id,
      oglas.kilometraza,
      oglas.snaga_kw,
      oglas.godina_proizvodnje,
      oglas.oblik_karoserije_id,
      oglas.vrsta_motora_id,
      oglas.vrsta_mjenjaca_id,
      oglas.objavio_korisnik_id,
      oglas.datum_objave,
      oglas.cijena,
      id),
    ]
  );
};

const remove = (id: number) => {
  return conn.query("DELETE FROM oglas WHERE id = $1", [id]);
};

const oglas = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default oglas;
