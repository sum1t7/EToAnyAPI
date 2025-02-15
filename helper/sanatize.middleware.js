 export const sanitizer = (req, res, next) => {
  const { lang , word } = req.params;
  if (/^[a-zA-Z0-9-]+$/.test(word , lang)) {
    next();
  } else {
    res.status(400).json({
      error: "Invalid parameter. Special characters are not allowed.",
    });
}
 };