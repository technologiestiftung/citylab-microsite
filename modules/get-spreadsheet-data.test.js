import { getSpreadsheetData } from "./get-spreadsheet-data";
import { sheetUrls } from "./sheet-urls";
import { rest } from "msw";
import { setupServer } from "msw/node";
import fs from "fs";
import path from "path";
const server = setupServer(
  rest.get("/static/data/spreadsheets.json", (_req, res, ctx) => {
    const spreadsheet = fs.readFileSync(
      path.resolve(__dirname, "../test/fixtures/spreadsheets.json"),
      "utf8"
    );
    const data = JSON.parse(spreadsheet);

    return res(ctx.json({ ...data }));
  })
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
describe("spreadsheets data module", () => {
  test("should fetch object from the cached spreadsheet", async () => {
    const url = "/static/data/spreadsheets.json";
    const response = await getSpreadsheetData(sheetUrls[0], url);
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
  });
  test("should try to fetch object and return undefined because it does not exist in the spreadsheet.json", async () => {
    const response = await getSpreadsheetData("http://missing.foo");
    expect(response).not.toBeDefined();
  });
});
