import express from "express";
import * as Sentry from "@sentry/node";

import "dotenv/config";
import errorHandler from "./middleware/errorHandler.js";
import contentRouter from "../routes/content.js";
import aboutRouter from "../routes/about.js";
import portRouter from "../routes/port.js";
import skillsRouter from "../routes/skills.js";
import contactRouter from "../routes/contact.js";
import log from "./middleware/logMiddleware.js";
import pkg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const { Pool } = pkg;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

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

// CORS middleware configuration
const corsOptions = {
  // origin: "https://eventsmanagementapp.netlify.app",
  origin: "http://localhost:3000 ",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

//Routes
app.use("/content", contentRouter);
app.use("/about", aboutRouter);
app.use("/port", portRouter);
app.use("/skills", skillsRouter);
app.use("/contact", contactRouter);

// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);

const port = process.env.POST || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default prisma;
