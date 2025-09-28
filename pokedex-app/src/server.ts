import { serve } from "bun";
import index from "./index.html";
import abilitiesData from "./data/abilities.json";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/abilities": {
      async GET(req) {
        return Response.json(abilitiesData);
      },
    },

    "/api/abilities/:id": async req => {
      const id = parseInt(req.params.id);
      const ability = abilitiesData.find(a => a.id === id);

      if (!ability) {
        return new Response("Ability not found", { status: 404 });
      }

      return Response.json(ability);
    },

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
