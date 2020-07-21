import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { sheetUrls } from "./sheet-urls";
import { urlRefactor } from "./url-refactor";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const text = response.text();
      throw new Error(`scraper module fetch response not ok\n${text}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default async function scraper(_moduleOptions) {
  try {
    // console.log("scraper module");
    const data = {};
    for (const url of sheetUrls) {
      const json = await fetchData(url);
      data[urlRefactor(url)] = json;
    }
    fs.writeFileSync(
      path.resolve(__dirname, "../static/data/spreadsheets.json"),
      JSON.stringify(data)
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}
