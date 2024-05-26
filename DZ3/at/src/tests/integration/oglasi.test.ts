import request from "supertest";
import app from "../../app"; // Import your express app or server
import { VrstaMjenjaca } from "@prisma/client";
import { createOglas } from "../../models/Oglas";

describe("listOglasi", () => {
  let oglasId: number;

  beforeEach(async () => {
    const oglas = await createOglas({
      naslov: "Test Oglas",
      opis: "Test opis",
      slikaUrl: "test.jpg",
      modelId: 1,
      kilometraza: 10000,
      cijena: 10000,
      godinaProizvodnje: 2022,
      oblikKaroserije: "Limuzina",
      vrstaMjenjaca: VrstaMjenjaca.Automatski,
      vrstaMotora: "Benzin",
      snagaKw: 100,
      datumObjave: new Date(),
      objavioKorisnikId: null,
    });

    oglasId = oglas.id;
  });
  it("should return 200 and the list of oglasi", async () => {
    const res = await request(app).get("/oglasi").expect(200);
  });

  it("should return 200 and the form for new oglas", async () => {
    const res = await request(app).get("/oglasi/oglas").expect(200);

    expect(res.text).toContain("<form");
  });

  it("should return 200 and the specific oglas", async () => {
    const res = await request(app)
      .get("/oglasi/" + oglasId)
      .expect(200);
  });

  it("should create a new oglas and return 201", async () => {
    const newOglas = {
      naslov: "New Oglas",
      opis: "This is a new oglas.",
      slikaUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Alfa_Romeo_logo.png/190px-Alfa_Romeo_logo.png",
      modelId: 1,
      kilometraza: 10000,
      cijena: 10000,
      godinaProizvodnje: 2022,
      oblikKaroserije: "Limuzina",
      vrstaMjenjaca: "Automatski",
      vrstaMotora: "Benzin",
      snagaKw: 100,
    };

    const res = await request(app).post("/oglasi").send(newOglas).expect(302);
  });

  it("should update an existing oglas and return 200", async () => {
    const updatedOglas = {
      naslov: "Updated Oglas",
      opis: "This is a updated oglas.",
      slikaUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Alfa_Romeo_logo.png/190px-Alfa_Romeo_logo.png",
      modelId: 1,
      kilometraza: 10000,
      cijena: 10000,
      godinaProizvodnje: 2022,
      oblikKaroserije: "Limuzina",
      vrstaMjenjaca: "Automatski",
      vrstaMotora: "Benzin",
      snagaKw: 100,
    };

    const res = await request(app)
      .put("/oglasi/" + oglasId)
      .send(updatedOglas)
      .expect(302);
  });

  it("should delete an existing oglas and return 200", async () => {
    const res = await request(app)
      .delete("/oglasi/" + oglasId)
      .expect(302);

    expect(res.body).toEqual({});
  });
});
