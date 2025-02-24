import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import credentialsRouters from "./routes/credentials.js"

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//Using Router here
app.use('/', credentialsRouters)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

