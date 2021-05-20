import express from "express";
import swagger from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))

app.use("/users", usersRoutes);

export { app };
