import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { type Destination } from "@shared/schema";

export function useDestinations() {
  return useQuery({
    queryKey: [api.destinations.list.path],
    queryFn: async () => {
      const res = await fetch(api.destinations.list.path);
      if (!res.ok) {
        throw new Error("Failed to fetch destinations");
      }
      return api.destinations.list.responses[200].parse(await res.json());
    },
  });
}

export function useDestination(id: number | null) {
  return useQuery({
    queryKey: [api.destinations.get.path, id],
    queryFn: async () => {
      if (!id) return null;
      const url = buildUrl(api.destinations.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) {
        throw new Error("Failed to fetch destination");
      }
      return api.destinations.get.responses[200].parse(await res.json());
    },
    enabled: id !== null,
  });
}
