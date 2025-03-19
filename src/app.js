const PORT = process.env.PORT ?? 3000;

const express = require("express");
const cors = require("cors");
const app = express();

const router_driver = require("./router/driver");

app.use(cors());
app.use(router_driver);

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
