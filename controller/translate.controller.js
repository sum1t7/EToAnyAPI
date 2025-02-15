import { getHindiMeaning } from "../helper/getMean.js";
import { getMeaning } from "../helper/getMeaning.helper.js";

export const getTranslate = async (req, res) => {
  try {
    const { lang, word } = req.query;
    const translate = await getMeaning(lang, word);
    const hindiWord = await getHindiMeaning(word);
    res.status(200).json({
      success: true,
      data: {
        translate,
        hindiWord,
      },
    });
   } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
