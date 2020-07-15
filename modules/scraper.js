import fetch from "node-fetch";
import fs from "fs";
import path from "path";

export const sheetUrls = [
  "https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/1/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/3/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/4/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/5/public/values?alt=json",
  "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json",
];

/**
 * @param {string} url
 * @returns {string} refactored url
 */
export function urlRefactor(url) {
  return url.replace(/\.|\/|\?|=|&|:/g, "-");
}
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
