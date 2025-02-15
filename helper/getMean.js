import axios from "axios";
import * as cheerio from "cheerio";
import { baseUrl2 } from "../config/BaseUrl.config.js";

export async function getHindiMeaning(word) {
  const { data } = await axios.get(`${baseUrl2}${word}&ie=UTF-8`);
  const $ = cheerio.load(data);
  const noun = $("div.word_mean_desc_css > a > span")
    .map((i, el) => {
      return {
        word: $(el).text(),
      };
    })
    .get();

  return noun;
}
