import { hashPassword } from "@/lib/auth";
import conn from "@/lib/db";

export type Korisnik = {
  id?: number;
  korisnicko_ime: string;
  lozinka: string;
};

const getAll = () => {
  return conn.query("SELECT * FROM korisnik");
};

const get = (id: number) => {
  return conn.query("SELECT * FROM korisnik WHERE id = $1", [id]);
};

const add = async (korisnik: Korisnik) => {
  const { salt, hash } = await hashPassword(korisnik.lozinka);

  return conn.query(
    "INSERT INTO korisnik (korisnicko_ime, lozinka_salt, lozinka_hash) VALUES ($1, $2, $3)",
    [korisnik.korisnicko_ime, salt, hash]
  );
};

const update = (id: number, korisnik: Korisnik) => {
  return conn.query(
    "UPDATE korisnik SET (korisnicko_ime) = ($1) WHERE id = $2",
    [korisnik.korisnicko_ime, id]
  );
};

const remove = (id: number) => {
  return conn.query("DELETE FROM korisnik WHERE id = $1", [id]);
};

const korisnik = {
  getAll,
  get,
  add,
  update,
  remove,
};

export default korisnik;
