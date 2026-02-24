import { pgTable, text, serial, integer, numeric, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const destinations = pgTable("destinations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  subtitle: text("subtitle").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: numeric("rating").notNull(),
  latitude: numeric("latitude").notNull(),
  longitude: numeric("longitude").notNull(),
  bestTime: text("best_time").notNull(),
  climate: text("climate").notNull(),
  activitiesCount: integer("activities_count").notNull(),
  attractionsCount: integer("attractions_count").notNull(),
  isPopular: boolean("is_popular").default(false).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
});

export const insertDestinationSchema = createInsertSchema(destinations).omit({ id: true });
export type InsertDestination = z.infer<typeof insertDestinationSchema>;
export type Destination = typeof destinations.$inferSelect;

export type DestinationResponse = Destination;
export type DestinationsListResponse = Destination[];
