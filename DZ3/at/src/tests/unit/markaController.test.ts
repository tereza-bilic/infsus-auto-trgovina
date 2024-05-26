import { Request, Response } from "express";
import {
  listMarke,
  showMarka,
  createMarkaHandler,
  updateMarkaHandler,
  deleteMarkaHandler,
} from "../../controllers/markaController";
import * as MarkaModel from "../../models/Marka"; // Add this line

describe("markaController", () => {
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

  describe("listMarke", () => {
    it("should return a list of marke", async () => {
      const marke = [{ id: 1, naziv: "Test Marka", ikonaUrl: "" }]; // Update the object to match the expected type
      const getAllMarke = jest
        .spyOn(MarkaModel, "getAllMarke")
        .mockResolvedValue(marke);
      await listMarke(req, res);
      expect(getAllMarke).toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith("marke/list", { marke });
    });
  });

  describe("showMarka", () => {
    it("should return a specific marka", async () => {
      req.params = { id: "1" };
      const marka = { id: 1, naziv: "Test Marka", ikonaUrl: "" }; // Update the object to match the expected type
      const getMarkaByIdSpy = jest
        .spyOn(MarkaModel, "getMarkaById")
        .mockResolvedValue(marka);
      await showMarka(req, res);
      expect(getMarkaByIdSpy).toHaveBeenCalledWith(Number(req.params.id));
      expect(res.render).toHaveBeenCalledWith("marke/show", { marka });
    });
    it("should handle marka not found", async () => {
      req.params = { id: "1" };
      const errorMessage = "Marka not found";
      jest.spyOn(MarkaModel, "getMarkaById").mockResolvedValue(null);
      await showMarka(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe("createMarkaHandler", () => {
    describe("createMarkaHandler", () => {
      it("should create a new marka", async () => {
        const newMarka = { id: 1, naziv: "New Marka", ikonaUrl: "" }; // Update the object to match the expected type
        req.body = newMarka;
        const createMarkaSpy = jest
          .spyOn(MarkaModel, "createMarka")
          .mockResolvedValue(newMarka);
        await createMarkaHandler(req, res);
        expect(createMarkaSpy).toHaveBeenCalledWith(newMarka);
        expect(res.redirect).toHaveBeenCalledWith(`/marke`);
      });
      it("should handle create error", async () => {
        const newMarka = { naziv: "New Marka", ikonaUrl: "" }; // Update the object to match the expected type
        req.body = newMarka;
        const errorMessage = "Error creating marka";
        jest
          .spyOn(MarkaModel, "createMarka")
          .mockRejectedValue(new Error(errorMessage));
        await createMarkaHandler(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(errorMessage);
      });
    });
  });

  describe("updateMarkaHandler", () => {
    it("should update an existing marka", async () => {
      req.params = { id: "1" };
      const updatedMarka = { id: 1, naziv: "Updated Marka", ikonaUrl: "" }; // Update the object to match the expected type
      req.body = updatedMarka;
      const updateMarkaSpy = jest
        .spyOn(MarkaModel, "updateMarka")
        .mockResolvedValue(updatedMarka);

      await updateMarkaHandler(req, res);

      expect(updateMarkaSpy).toHaveBeenCalledWith(
        Number(req.params.id),
        updatedMarka
      );
      expect(res.redirect).toHaveBeenCalledWith(`/marke/${req.params.id}`);
    });

    it("should handle update error", async () => {
      req.params = { id: "1" };
      const errorMessage = "Error updating marka";
      jest
        .spyOn(MarkaModel, "updateMarka")
        .mockRejectedValue(new Error(errorMessage));

      await updateMarkaHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe("deleteMarkaHandler", () => {
    it("should delete an existing marka", async () => {
      req.params = { id: "1" };
      const updateMarkaSpy = jest
        .spyOn(MarkaModel, "deleteMarka")
        .mockImplementationOnce(async () => {
          return { id: 1, naziv: "Test Marka", ikonaUrl: "" };
        });

      await deleteMarkaHandler(req, res);
      expect(res.redirect).toHaveBeenCalledWith(`/marke`);
    });
  });
});
