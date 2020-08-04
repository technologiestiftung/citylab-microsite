import cases from "jest-in-case";
import { urlRefactor } from "./url-refactor";
cases(
  "urlRefactor(url) testing",
  (opts) => {
    expect(urlRefactor(opts.url)).toBe(opts.result);
  },
  [
    {
      name: "should replace all characters in url",
      url: "http://example.com?value=2&foo=bah",
      result: "http---example-com-value-2-foo-bah",
    },
    {
      name: "should replace all =",
      url: "==",
      result: "--",
    },
    {
      name: "should replace all ?",
      url: "?",
      result: "-",
    },
    {
      name: "should replace all &",
      url: "&",
      result: "-",
    },
    {
      name: "should replace all :",
      url: "::",
      result: "--",
    },
    {
      name: "should replace all ./?=&:",
      url: "./?=&:",
      result: "------",
    },
  ]
);
