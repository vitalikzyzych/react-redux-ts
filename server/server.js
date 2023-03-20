const path = require('path');
const express = require('express');
const compression = require('compression');
// var expressStaticGzip = require('express-static-gzip');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');
// app.use(
//   expressStaticGzip(path.join(__dirname, 'build'), {
//     enableBrotli: true,
//   })
// );
app.use(compression());
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
