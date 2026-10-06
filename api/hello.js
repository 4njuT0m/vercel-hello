module.exports = (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send("Please add ?name=YourName to the URL");
  }
  res.status(200).send(`Hello, ${name}!`);
};
