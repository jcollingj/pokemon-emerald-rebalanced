import { serve } from "bun";
import index from "./index.html";
import abilitiesData from "./data/abilities.json";
import pokemonData from "./data/pokemon.json";
import movesData from "./data/moves.json";
import trainersData from "./data/trainers.json";
import gymLeadersData from "./data/gym-leaders.json";
import routesData from "./data/routes.json";

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

    "/api/trainers": {
      async GET(req) {
        return Response.json(trainersData);
      },
    },

    "/api/trainers/:id": async req => {
      const id = parseInt(req.params.id);
      const trainer = trainersData.find(t => t.id === id);

      if (!trainer) {
        return new Response("Trainer not found", { status: 404 });
      }

      return Response.json(trainer);
    },

    "/api/gym-leaders": {
      async GET(req) {
        return Response.json(gymLeadersData);
      },
    },

    "/api/gym-leaders/:id": async req => {
      const id = parseInt(req.params.id);
      const leader = gymLeadersData.find(l => l.id === id);

      if (!leader) {
        return new Response("Gym leader not found", { status: 404 });
      }

      return Response.json(leader);
    },

    "/api/routes": {
      async GET(req) {
        return Response.json(routesData);
      },
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
