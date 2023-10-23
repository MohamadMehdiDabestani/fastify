import Fastify from "fastify";
import routes from "./modules/user/auth/routes";

const server = Fastify({
  logger: true,
});
server.register(routes, {
  prefix: "/auth",
});
server.get("/", (req, rep) => {
  return "enjoy !";
});
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
