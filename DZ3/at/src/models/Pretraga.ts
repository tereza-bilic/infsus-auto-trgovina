import conn from "@/lib/db";

export type Pretraga = {
  id?: number;
  korisnik_id: number;
  model_id?: number;
  oblik_karoserije_id?: number;
  kilometraza_od?: number;
  kilometraza_do?: number;
  godina_proizvodnje_od?: number;
  godina_proizvodnje_do?: number;
  snaga_kw_od?: number;
  snaga_kw_do?: number;
  vrsta_motora_id?: number;
  vrsta_mjenjaca_id?: number;
  cijena_od?: number;
  cijena_do?: number;
};

const getAll = () => {
  return conn.query("SELECT * FROM pretraga");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM pretraga WHERE id = $1", [id]);
};

const add = (pretraga: Pretraga) => {
  return conn.query(
    "INSERT INTO pretraga (" +
      "korisnik_id, model_id, oblik_karoserije_id, kilometraza_od, " +
      "kilometraza_do, godina_proizvodnje_od, godina_proizvodnje_do, " +
      "snaga_kw_od, snaga_kw_do, vrsta_motora_id, vrsta_mjenjaca_id, " +
      "cijena_od, cijena_do" +
      ") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    [
      pretraga.korisnik_id,
      pretraga.model_id,
      pretraga.oblik_karoserije_id,
      pretraga.kilometraza_od,
      pretraga.kilometraza_do,
      pretraga.godina_proizvodnje_od,
      pretraga.godina_proizvodnje_do,
      pretraga.snaga_kw_od,
      pretraga.snaga_kw_do,
      pretraga.vrsta_motora_id,
      pretraga.vrsta_mjenjaca_id,
      pretraga.cijena_od,
      pretraga.cijena_do,
    ]
  );
};

const update = (id: number, pretraga: Pretraga) => {
  return conn.query(
    "UPDATE pretraga SET (" +
      "korisnik_id, model_id, oblik_karoserije_id, kilometraza_od, " +
      "kilometraza_do, godina_proizvodnje_od, godina_proizvodnje_do, " +
      "snaga_kw_od, snaga_kw_do, vrsta_motora_id, vrsta_mjenjaca_id, " +
      "cijena_od, cijena_do" +
      ") = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)" +
      "WHERE id = $14",
    [
      pretraga.korisnik_id,
      pretraga.model_id,
      pretraga.oblik_karoserije_id,
      pretraga.kilometraza_od,
      pretraga.kilometraza_do,
      pretraga.godina_proizvodnje_od,
      pretraga.godina_proizvodnje_do,
      pretraga.snaga_kw_od,
      pretraga.snaga_kw_do,
      pretraga.vrsta_motora_id,
      pretraga.vrsta_mjenjaca_id,
      pretraga.cijena_od,
      pretraga.cijena_do,
      id,
    ]
  );
};

const remove = (id: number) => {
  return conn.query("DELETE FROM pretraga WHERE id = $1", [id]);
};

const pretraga = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default pretraga;
