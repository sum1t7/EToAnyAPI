import express from "express";
import { getTranslate } from "../controller/translate.controller.js";
import { languages } from "../config/Language.config.js";
import {sanitizer} from '../helper/sanatize.middleware.js'
const port = process.env.PORT || 3000;
const app = express();

app.get("/api", (req, res) => {
  res.json({ Message: "You've reached the English word meaning provider API, Enter word in url after /word" });
});

app.get("/", (req, res) => {
  res.json({ Message: "Word Meaning Proveder. Go to /api" });
});

app.get("/api/:lang/:word", sanitizer ,  async (req, res) => {
    const lang = req.params.lang in languages ? languages[req.params.lang] : '' ;
    const word = req.params.word;
   await getTranslate({ query: { lang, word } }, res);
});

app.get("/api/:word", sanitizer ,  async (req, res) => {
   const word = req.params.word;
 await getTranslate({ query: { word } }, res);
});

app.get("*", (req, res) => {
  res.status(404).json({ Message: "Bad Request!" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});