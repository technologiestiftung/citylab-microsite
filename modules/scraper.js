import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const urls = [
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/3/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/1/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json"
];

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
export default async function scraper(moduleOptions) {
  try {
    console.log("scraper module");
    const data = {};
    for (const url of urls) {
      const json = await fetchData(url);
      data[url.replace(/\/|\?|\=|\&|:/g, "-")] = json;
    }
    fs.writeFileSync(
      path.resolve(__dirname, "../static/data/spreadsheets.json"),
      JSON.stringify(data)
    );
  } catch (error) {
    throw error;
  }
}
