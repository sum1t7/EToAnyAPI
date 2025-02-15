import { getHindiMeaning } from "../helper/getHindiMeaning.js";
import { getMeaning } from "../helper/getMeaning.helper.js";

export const getTranslate = async (req, res) => {
  try {
    const { lang, word } = req.query;
    const meaning = !lang
      ? await getHindiMeaning(word)
      : await getMeaning(lang, word);
    res.status(200).json({
      success: true,
      meaning,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
