// we will use supertest to test HTTP requests/responses
const request = require("supertest");
const app = require("./app");

describe("GET / ", () => {
  test("It should respond with an Ok", async () => {
    const response = await request(app).get("/");
    console.log(response.text)
    expect(response.text).toEqual("Hello World");
    expect(response.statusCode).toBe(200);
  });
});