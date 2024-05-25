import request from "supertest";
import app from "../../app"; // Import your express app or server

describe("getAllOglasi", () => {
  it("should return 200 & a list of oglasi", async () => {
    const res = await request(app)
      .get("/oglasi") // Replace with your actual endpoint if different
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });
});
