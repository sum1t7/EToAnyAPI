import { getMeaning } from "../helper/getMeaning.helper.js";

export const getTranslate = async (req, res) => {
  try {
    const { lang, word } = req.query;
    const translate = await getMeaning(lang, word);
    res.json({ success: true, result: translate });
  } catch (err) {
    
    res.status(500).json({ success: false, message: err.message });
  }
};
