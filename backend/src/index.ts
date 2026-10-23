import dotenv from "dotenv";

dotenv.config();

import { app } from "./app.js";

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("The server is running on port: ", port);
});
