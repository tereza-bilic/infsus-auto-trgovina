import { Request, Response } from "express";
import {
  listOglasi,
  showOglas,
  createOglasHandler,
  updateOglasHandler,
  deleteOglasHandler,
  searchOglasiHandler,
} from "../../../controllers/oglasController";
import * as OglasModel from "../../../models/Oglas";
import * as MarkeModel from "../../../models/Marka";
import * as PovijestServisiranjaModel from "../../../models/PovijestServisiranja";

describe("oglasController", () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      redirect: jest.fn(),
      render: jest.fn(),
    } as unknown as Response;
  });

  describe("listOglasi", () => {
    it("should return a list of oglasi", async () => {
      const oglasi = [
        {
          id: 1,
          naslov: "Test Oglas",
          modelId: 1,
          opis: "Test opis",
          slikaUrl: "test.jpg",
          kilometraza: 10000,
          cijena: 10000,
          godinaProizvodnje: 2022,
          oblikKaroserije: "Limuzina" as OglasModel.OblikKaroserije,
          objavioKorisnikId: 1,
          datumObjave: new Date(),
          snagaKw: 100,
          vrstaMjenjaca: "Automatski" as OglasModel.VrstaMjenjaca,
          vrstaMotora: "Benzin" as OglasModel.VrstaMotora,
          marka: {
            id: 1,
            naziv: "Test Marka",
            ikonaUrl: "test.jpg",
          },
        },
      ]; // Update the object to match the expected type
      const getAllOglasi = jest
        .spyOn(OglasModel, "getAllOglasi")
        .mockResolvedValue(oglasi);
      await listOglasi(req, res);
      expect(getAllOglasi).toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith("oglasi/list", { oglasi });
    });
  });

  describe("showOglas", () => {
    it("should return a specific oglas", async () => {
      req.params = { id: "1" };
      const oglas = {
        id: 1,
        naslov: "Test Oglas",
        modelId: 1,
        opis: "Test opis",
        slikaUrl: "test.jpg",
        kilometraza: 10000,
        cijena: 10000,
        godinaProizvodnje: 2022,
        oblikKaroserije: "Limuzina" as OglasModel.OblikKaroserije,
        objavioKorisnikId: 1,
        datumObjave: new Date(),
        snagaKw: 100,
        vrstaMjenjaca: "Automatski" as OglasModel.VrstaMjenjaca,
        vrstaMotora: "Benzin" as OglasModel.VrstaMotora,
        marka: {
          id: 1,
          naziv: "Test Marka",
          ikonaUrl: "test.jpg",
        },
      }; // Update the object to match the expected type
      const getOglasByIdSpy = jest
        .spyOn(OglasModel, "getOglasById")
        .mockResolvedValue(oglas);

      const marke = [
        {
          id: 1,
          naziv: "Test Marka",
          ikonaUrl: "test.jpg",
        },
      ]; // Update the object to match the expected type
      const getAllMarke = jest
        .spyOn(MarkeModel, "getAllMarke")
        .mockResolvedValue(marke);

      const povijestServisiranja = [
        {
          id: 1,
          oglasId: 1,
          datum: new Date(),
          opis: "Test opis",
          cijena: 100,
          serviser: "Test serviser",
          trenutnaKilometraza: 10000,
        },
      ]; // Update the object to match the expected type
      const getServiceHistoryByOglasIdSpy = jest
        .spyOn(PovijestServisiranjaModel, "getServiceHistoryByOglasId")
        .mockResolvedValue(povijestServisiranja);
      await showOglas(req, res);
      expect(getOglasByIdSpy).toHaveBeenCalledWith(Number(req.params.id));
      expect(res.render).toHaveBeenCalledWith("oglasi/oglas", {
        oglas,
        marke,
        karoserije: Object.values(OglasModel.OblikKaroserije),
        mjenjaci: Object.values(OglasModel.VrstaMjenjaca),
        motori: Object.values(OglasModel.VrstaMotora),
        povijestServisiranja,
      });
    });
    it("should handle oglas not found", async () => {
      req.params = { id: "1" };
      const errorMessage = "Oglas not found";
      jest.spyOn(OglasModel, "getOglasById").mockResolvedValue(null);
      await showOglas(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe("createOglasHandler", () => {
    it("should create a new oglas", async () => {
      const newOglas = {
        id: 1,
        naslov: "Test Oglas",
        modelId: 1,
        opis: "Test opis",
        slikaUrl: "test.jpg",
        kilometraza: 10000,
        cijena: 10000,
        godinaProizvodnje: 2022,
        oblikKaroserije: "Limuzina" as OglasModel.OblikKaroserije,
        objavioKorisnikId: 1,
        datumObjave: new Date(),
        snagaKw: 100,
        vrstaMjenjaca: "Automatski" as OglasModel.VrstaMjenjaca,
        vrstaMotora: "Benzin" as OglasModel.VrstaMotora,
        marka: {
          id: 1,
          naziv: "Test Marka",
          ikonaUrl: "test.jpg",
        },
      }; // Update the object to match the expected type
      req.body = newOglas;

      const { modelId, ...rest } = newOglas;

      const createOglasSpy = jest
        .spyOn(OglasModel, "createOglas")
        .mockResolvedValue(newOglas);
      await createOglasHandler(req, res);
      expect(createOglasSpy).toHaveBeenCalledWith({
        ...rest,
        model: {
          connect: {
            id: Number(req.body.modelId),
          },
        },
        datumObjave: expect.any(Date),
        cijena: expect.any(Number),
        godinaProizvodnje: expect.any(Number),
        kilometraza: expect.any(Number),
        snagaKw: expect.any(Number),
      });
      expect(res.redirect).toHaveBeenCalledWith(`/oglasi`);
    });
    // it("should handle create error", async () => {
    //   const newOglas = { naziv: "New Oglas" }; // Update the object to match the expected type
    //   req.body = newOglas;
    //   const errorMessage = "Error creating oglas";
    //   jest
    //     .spyOn(OglasModel, "createOglas")
    //     .mockRejectedValue(new Error(errorMessage));
    //   await createOglasHandler(req, res);
    //   expect(res.status).toHaveBeenCalledWith(500);
    //   expect(res.send).toHaveBeenCalledWith(errorMessage);
    // });
  });

  describe("updateOglasHandler", () => {
    it("should update an existing oglas", async () => {
      req.params = { id: "1" };
      const updatedOglas = {
        id: 1,
        naslov: "Updated Oglas",
        modelId: 1,
        opis: "Updated opis",
        slikaUrl: "test.jpg",
        kilometraza: 10000,
        cijena: 10000,
        godinaProizvodnje: 2022,
        oblikKaroserije: "Limuzina" as OglasModel.OblikKaroserije,
        objavioKorisnikId: 1,
        datumObjave: new Date(),
        snagaKw: 100,
        vrstaMjenjaca: "Automatski" as OglasModel.VrstaMjenjaca,
        vrstaMotora: "Benzin" as OglasModel.VrstaMotora,
        marka: {
          id: 1,
          naziv: "Test Marka",
          ikonaUrl: "test.jpg",
        },
      };
      req.body = updatedOglas;
      const { modelId, ...rest } = updatedOglas;
      const updateOglasSpy = jest
        .spyOn(OglasModel, "updateOglas")
        .mockResolvedValue(updatedOglas);
      await updateOglasHandler(req, res);
      expect(updateOglasSpy).toHaveBeenCalledWith(Number(req.params.id), {
        ...rest,
        model: {
          connect: {
            id: Number(req.body.modelId),
          },
        },
        datumObjave: expect.any(Date),
        cijena: expect.any(Number),
        godinaProizvodnje: expect.any(Number),
        kilometraza: expect.any(Number),
        snagaKw: expect.any(Number),
      });
      expect(res.redirect).toHaveBeenCalledWith(`/oglasi`);
    });
  });

  describe("deleteOglasHandler", () => {
    it("should delete an oglas", async () => {
      req.params = { id: "1" };
      const oglas = {
        id: 1,
        naslov: "Test Oglas",
        modelId: 1,
        opis: "Test opis",
        slikaUrl: "test.jpg",
        kilometraza: 10000,
        cijena: 10000,
        godinaProizvodnje: 2022,
        oblikKaroserije: "Limuzina" as OglasModel.OblikKaroserije,
        objavioKorisnikId: 1,
        datumObjave: new Date(),
        snagaKw: 100,
        vrstaMjenjaca: "Automatski" as OglasModel.VrstaMjenjaca,
        vrstaMotora: "Benzin" as OglasModel.VrstaMotora,
        marka: {
          id: 1,
          naziv: "Test Marka",
          ikonaUrl: "test.jpg",
        },
      }; // Update the object to match the expected type
      const deleteOglasSpy = jest
        .spyOn(OglasModel, "deleteOglas")
        .mockResolvedValue(oglas);
      await deleteOglasHandler(req, res);
      expect(deleteOglasSpy).toHaveBeenCalledWith(Number(req.params.id));
      expect(res.redirect).toHaveBeenCalledWith(`/oglasi`);
    });
  });
});
