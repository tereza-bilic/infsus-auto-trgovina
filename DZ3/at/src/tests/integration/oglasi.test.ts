// import request from "supertest";
// import app from "../../app"; // Import your express app or server

// describe("listOglasi", () => {
//   it("should return 200 and the list of oglasi", async () => {
//     const res = await request(app).get("/oglasi").expect(200);

//     // expect(Array.isArray(res.body)).toBeTruthy();
//   });

//   it("should return 200 and the form for new oglas", async () => {
//     const res = await request(app).get("/oglasi/new").expect(200);

//     expect(res.text).toContain("<form");
//   });

//   it("should return 200 and the specific oglas", async () => {
//     const res = await request(app)
//       .get("/oglasi/1") // assuming 1 is an existing oglas id
//       .expect(200);

//     expect(res.body.id).toBe(1);
//   });

//   it("should create a new oglas and return 201", async () => {
//     const newOglas = {
//       title: "New Oglas",
//       description: "This is a new oglas.",
//     };

//     const res = await request(app).post("/oglasi").send(newOglas).expect(201);

//     expect(res.body.title).toBe(newOglas.title);
//     expect(res.body.description).toBe(newOglas.description);
//   });

//   it("should update an existing oglas and return 200", async () => {
//     const updatedOglas = {
//       title: "Updated Oglas",
//       description: "This is an updated oglas.",
//     };

//     const res = await request(app)
//       .put("/oglasi/1") // assuming 1 is an existing oglas id
//       .send(updatedOglas)
//       .expect(200);

//     expect(res.body.title).toBe(updatedOglas.title);
//     expect(res.body.description).toBe(updatedOglas.description);
//   });

//   it("should delete an existing oglas and return 200", async () => {
//     const res = await request(app)
//       .delete("/oglasi/1") // assuming 1 is an existing oglas id
//       .expect(200);

//     expect(res.body).toEqual({});
//   });
// });
