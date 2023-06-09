const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/index");
const uploadRouter = require("./upload.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(uploadRouter);
//route
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
