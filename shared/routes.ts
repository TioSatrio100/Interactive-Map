import { z } from "zod";
import { insertDestinationSchema, destinations } from "./schema";

export const api = {
  destinations: {
    list: {
      method: 'GET' as const,
      path: '/api/destinations' as const,
      responses: {
        200: z.array(z.custom<typeof destinations.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/destinations/:id' as const,
      responses: {
        200: z.custom<typeof destinations.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
