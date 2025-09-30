import { serve } from "bun";
import index from "./index.html";
import abilitiesData from "./data/abilities.json";
import pokemonData from "./data/pokemon.json";
import movesData from "./data/moves.json";

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

    "/api/pokemon": {
      async GET(req) {
        return Response.json(pokemonData);
      },
    },

    "/api/pokemon/:id": async req => {
      const id = parseInt(req.params.id);
      const pokemon = pokemonData.find(p => p.id === id || p.natDexNum === id);

      if (!pokemon) {
        return new Response("Pokemon not found", { status: 404 });
      }

      return Response.json(pokemon);
    },

    "/api/moves": {
      async GET(req) {
        return Response.json(movesData);
      },
    },

    "/api/moves/search": async req => {
      const url = new URL(req.url);
      const name = url.searchParams.get('name');

      if (!name) {
        return new Response("Name parameter required", { status: 400 });
      }

      const move = movesData.find(m => m.name.toLowerCase() === name.toLowerCase());

      if (!move) {
        return new Response("Move not found", { status: 404 });
      }

      return Response.json(move);
    },

    "/api/moves/:id": async req => {
      const id = parseInt(req.params.id);
      const move = movesData.find(m => m.id === id);

      if (!move) {
        return new Response("Move not found", { status: 404 });
      }

      return Response.json(move);
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
