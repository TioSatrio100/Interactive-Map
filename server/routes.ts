import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.destinations.list.path, async (req, res) => {
    const allDestinations = await storage.getDestinations();
    res.json(allDestinations);
  });

  app.get(api.destinations.get.path, async (req, res) => {
    const dest = await storage.getDestination(Number(req.params.id));
    if (!dest) {
      return res.status(404).json({ message: "Destination not found" });
    }
    res.json(dest);
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getDestinations();
  if (existing.length === 0) {
    const seeds = [
      {
        name: "Bali",
        subtitle: "Island of the Gods",
        description: "Bali is a living postcard of dramatic rice terraces, pounding surf, ceremonial temples, and vibrant coral reefs. The island's diverse landscape offers everything from volcanic mountains to pristine beaches.",
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        rating: "4.9",
        latitude: "-8.4095",
        longitude: "115.1889",
        bestTime: "April - October (Dry Season)",
        climate: "Tropical",
        activitiesCount: 35,
        attractionsCount: 25,
        isPopular: true,
        isFeatured: true,
      },
      {
        name: "Yogyakarta",
        subtitle: "The Soul of Java",
        description: "Yogyakarta is the cultural heart of Java, known for its traditional arts, shadow puppetry, and the magnificent Borobudur and Prambanan temples.",
        imageUrl: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272",
        rating: "4.8",
        latitude: "-7.7956",
        longitude: "110.3695",
        bestTime: "May - October",
        climate: "Tropical Monsoon",
        activitiesCount: 20,
        attractionsCount: 15,
        isPopular: true,
        isFeatured: true,
      },
      {
        name: "Lombok",
        subtitle: "The Unspoiled Paradise",
        description: "Lombok offers pristine beaches, the majestic Mount Rinjani, and a laid-back atmosphere perfect for nature lovers and adventurers.",
        imageUrl: "https://images.unsplash.com/photo-1571258674512-ab7e8da92823",
        rating: "4.7",
        latitude: "-8.5833",
        longitude: "116.1167",
        bestTime: "May - September",
        climate: "Tropical",
        activitiesCount: 18,
        attractionsCount: 12,
        isPopular: false,
        isFeatured: true,
      }
    ];

    for (const seed of seeds) {
      await storage.createDestination(seed);
    }
  }
}
