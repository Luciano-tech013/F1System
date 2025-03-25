import express from "express";
import cors from "cors";
import { driver_router } from "./router/driver.routes.mjs";
import { team_routes } from "./router/team.routes.mjs";
import { errorHandler } from "./utils/handler/error.handler.mjs";

const PORT = process.env.PORT ?? 3000;
const app = express();

//Middleware para parsear el BODY
app.use(express.json())
app.use(cors());

app.use('/api', driver_router);
app.use('/api', team_routes);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
