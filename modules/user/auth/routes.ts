import { FastifyInstance, FastifyPluginOptions } from "fastify";

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.addHook("onRequest", (request, reply, done) => {
    if (request.headers.token !== "valid") {
      reply.code(401);
      reply.send("Unauthorized");
    }
    done();
  });

  fastify.get("/check", async (request, reply) => {
    return { hello: "world" };
  });
}
export default routes;
