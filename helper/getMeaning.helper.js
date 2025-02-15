import axios from "axios";
import * as cheerio from "cheerio";
import { baseUrl } from "../config/BaseUrl.config.js";

export async function getMeaning(language, word) {
 
 try { const { data } = await axios.get(
    `${baseUrl}${language}&sl=en&tl=${language}&e=${word}`
  );
  
  const $ = cheerio.load(data);
  const noun = $("ul.noun").first();
  const adjective = $("ul.adjective").first();
  const interjection = $("ul.interjection").first();
  const verb = $("ul.verb").first();
  const adverb = $("ul.adverb").first();
  const pronoun = $("ul.pronoun").first();
  const preposition = $("ul.preposition").first();
  const conjunction = $("ul.conjunction").first();

  
  const translatedWord = {
    noun: noun
    .children()
    .map((i, el) => {
      return {
          word: $(el)
          .text()
            .replace(/[\+\-](\d+)/g, ""),
          };
        })
        .get(),
        
        adjective: adjective
      .children()
      .map((i, el) => {
        return {
          word: $(el)
          .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
      interjection: interjection
      .children()
      .map((i, el) => {
        return {
          word: $(el)
            .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
      verb: verb
      .children()
      .map((i, el) => {
        return {
          word: $(el)
          .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
      adverb: adverb
      .children()
      .map((i, el) => {
        return {
          word: $(el)
            .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
    pronoun: pronoun
    .children()
    .map((i, el) => {
      return {
          word: $(el)
            .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
    preposition: preposition
      .children()
      .map((i, el) => {
        return {
          word: $(el)
            .text()
            .replace(/[\+\-](\d+)/g, ""),
          };
        })
      .get(),
      conjunction: conjunction
      .children()
      .map((i, el) => {
        return {
          word: $(el)
          .text()
            .replace(/[\+\-](\d+)/g, ""),
        };
      })
      .get(),
  };

  const filteredTranslatedWord = Object.fromEntries(
    Object.entries(translatedWord).filter(([key, value]) => value.length > 0)
  );
 
  

   return Object.keys(filteredTranslatedWord).length > 0
   ? filteredTranslatedWord
    : "No meaning found";
  }catch (error) {
    throw new Error(error);
   }
}
