import "dotenv/config";

import app from "./app.js";
import env from "./utils/cleanEnv.js";

const port = env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
