import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); //se obtiene la ruta absoluta

app.set("views", join(__dirname, "views")); //el metodo join nos ayuda con la ruta del SO
app.set("view engine", "ejs");
app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);
console.log("server listening on port", process.env.PORT || 3000);
