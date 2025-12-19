import express from "express";
import userRouter from "./userRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from './swagger-output.json' with { type: "json" };


const app = express();

app.use(userRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(4200, () => {
    console.log("Server is running at the port 4200");
});
