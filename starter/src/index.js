import express from "express";
import * as Sentry from "@sentry/node";

import "dotenv/config";
import errorHandler from "./middleware/errorHandler.js";
import contentRouter from "../routes/content.js";
import log from "./middleware/logMiddleware.js";

const app = express();

//Sentry

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

//Global middleware
app.use(express.json());
app.use(log);

app.get("/", (req, res) => {
  res.send("MY WEB APP");
});

//Routes
app.use("/content", contentRouter);

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);

const port = process.env.POST || 3000;
app.listen(3000, () => {
  console.log(`Server is listening on port ${port}`);
});
