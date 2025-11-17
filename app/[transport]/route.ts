import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "jobRecommendation",
      "give job recommendation based on experience level",
      {
        experienceLevel: z.enum(["entry", "mid", "senior"]),
      },
      async ({ experienceLevel }) => ({
        content: [
          {
            type: "text",
            text: `Based on your experience level (${experienceLevel}), here are some job recommendations.`,
          },
        ],
      })
    );
  },
  {
    capabilities: {
      tools: {
        listChanged: true,
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL!,
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
