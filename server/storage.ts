import { destinations, type InsertDestination, type Destination } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getDestinations(): Promise<Destination[]>;
  getDestination(id: number): Promise<Destination | undefined>;
  createDestination(dest: InsertDestination): Promise<Destination>;
}

export class DatabaseStorage implements IStorage {
  async getDestinations(): Promise<Destination[]> {
    return await db.select().from(destinations);
  }

  async getDestination(id: number): Promise<Destination | undefined> {
    const [dest] = await db.select().from(destinations).where(eq(destinations.id, id));
    return dest;
  }

  async createDestination(insertDest: InsertDestination): Promise<Destination> {
    const [dest] = await db.insert(destinations).values(insertDest).returning();
    return dest;
  }
}

export const storage = new DatabaseStorage();
