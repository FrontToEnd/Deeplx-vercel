module.exports = (req, res) => {
  res.json({
    code: 200,
    message: "Welcome to the DeepL API. Please POST to /api/translate."
  });
};
