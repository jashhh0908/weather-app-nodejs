const express = require('express'); //importing express module
const app = express();

const siteRoutes = require('./routes/siteRoutes');

app.use(express.json());
app.use(express.static("public"));
app.use('/', siteRoutes);
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})