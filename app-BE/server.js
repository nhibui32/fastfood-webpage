import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import credentialsRouters from "./routes/credentials.js"

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = process.env.PORT || 5000;

//Using Router here
app.use('/users', credentialsRouters)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

