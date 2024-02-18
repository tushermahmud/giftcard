import express from "express";
import userRoutes from "./routes/user.route";
import cors from "cors"
import morgan from "morgan";
import 'dotenv/config';
import catalogueRoutes from "./routes/catalogue.route";
import orderRoutes from "./routes/order.route";
const app = express();
export { app };
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin to send requests with credentials
  credentials: true, // Allow credentials
};
app.use(cors(corsOptions));

app.use("/user", userRoutes);
app.use("/catalogue", catalogueRoutes);
app.use("/order", orderRoutes);


app.listen(PORT, "0.0.0.0", ()=>{
  console.log(`server is running on port ${PORT}`);
})

