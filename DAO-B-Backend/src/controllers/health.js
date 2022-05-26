const ping = (req, res) => {
  res.status(200).json('pong');
};

module.exports = { ping };
