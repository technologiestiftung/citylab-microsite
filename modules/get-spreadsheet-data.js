import { urlRefactor } from "./url-refactor";
/**
 * Should make a request to /static/data/spreadsheets.json
 * @param {String} url Url to load the data from currently "/static/data/spreadsheets.json"
 * @returns {Object} Complex object taken from google spreadsheets
 */
export async function getSpreadsheetData(
  sheetUrl,
  url = "/data/spreadsheets.json"
) {
  try {
    let data = undefined;
    const response = await fetch(url);
    if (!response.ok) {
      return data;
    }
    const json = await response.json();
    data = json[urlRefactor(sheetUrl)];
    return { data };
  } catch (error) {
    console.error("in getSpreadsheetData", error);
    throw error;
  }
}
