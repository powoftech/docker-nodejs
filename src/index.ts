import "dotenv/config";

import app from "./app.js";
import env from "./utils/cleanEnv.js";

const port = env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀`);
  console.log(`Press CTRL+C to stop it`);
});
