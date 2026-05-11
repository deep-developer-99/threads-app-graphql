import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import createApolloGraphqlServer from "./graphql/index.js";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ messge: "Server is up and running" });
  });

  app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
