import fastify from "fastify";
import {config} from "dotenv";
config();
const app = fastify();

// ! means that it will exist for sure
app.listen({ port: parseInt(process.env.PORT!)});
console.log("SERVER IS RUNNING");