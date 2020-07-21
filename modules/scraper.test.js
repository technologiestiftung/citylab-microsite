import { rest } from "msw";
import { setupServer } from "msw/node";
import scraper, { sheetUrls, urlRefactor } from "./scraper";
const fs = require("fs");
const server = setupServer(
  rest.get(
    "https://spreadsheets.google.com/feeds/list/:publishId/:sheetId/public/values",
    (req, res, ctx) => {
      // console.log(req);
      // Respond with a mocked user token that gets persisted
      // in the `sessionStorage` by the `Login` component.
      return res(ctx.json({ foo: "bah", ok: true }));
    }
  )
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => {
  server.close();
  jest.restoreAllMocks();
});

describe("Testing the scraper dev module", () => {
  test("should make requests to google spreadsheet", async () => {
    let sheetsData = undefined;
    const fsSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation((_path, data) => {
        sheetsData = JSON.parse(data);
      });
    await scraper();
    expect(fsSpy).toHaveBeenCalledTimes(1);
    for (const url of sheetUrls) {
      const tmpUrl = urlRefactor(url);
      expect(sheetsData[tmpUrl]).toBeDefined();
    }
  });
});
