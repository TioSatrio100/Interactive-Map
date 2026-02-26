import { type Destination } from "@shared/schema";

export const STATIC_DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: "Bali",
    subtitle: "Island of the Gods",
    description: "Famous for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. Home to religious sites such as cliffside Uluwatu Temple.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    latitude: "-8.409518",
    longitude: "115.188919",
    rating: "4.9",
    category: "Nature",
    isFeatured: true
  },
  {
    id: 2,
    name: "Yogyakarta",
    subtitle: "Soul of Java",
    description: "The center of Javanese arts and culture. Known for its traditional textiles, puppets, and the massive 9th-century Borobudur Buddhist temple.",
    imageUrl: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=800&q=80",
    latitude: "-7.7956",
    longitude: "110.3695",
    rating: "4.7",
    category: "Culture",
    isFeatured: true
  },
  {
    id: 3,
    name: "Lombok",
    subtitle: "The Unspoiled Paradise",
    description: "An island in West Nusa Tenggara province known for beaches and surfing spots, particularly at Kuta and Banko Banko in south Lombok.",
    imageUrl: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=800&q=80",
    latitude: "-8.5833",
    longitude: "116.1167",
    rating: "4.8",
    category: "Nature",
    isFeatured: true
  },
  {
    id: 4,
    name: "Jakarta",
    subtitle: "The Big Durian",
    description: "The massive, sprawling capital of Indonesia. A historic mix of cultures – Javanese, Malay, Chinese, Arab, Indian and European – has influenced its architecture, language and cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80",
    latitude: "-6.2088",
    longitude: "106.8456",
    rating: "4.5",
    category: "City",
    isFeatured: false
  },
  {
    id: 5,
    name: "Raja Ampat",
    subtitle: "The Last Paradise",
    description: "An archipelago of over 1,500 small islands, cays, and shoals surrounding the four main islands of Misool, Salawati, Batanta, and Waigeo. Known for its incredible marine biodiversity.",
    imageUrl: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&q=80",
    latitude: "-0.2241",
    longitude: "130.4900",
    rating: "5.0",
    category: "Nature",
    isFeatured: true
  },
  {
    id: 6,
    name: "Komodo National Park",
    subtitle: "Home of the Dragons",
    description: "A national park in Indonesia located within the Lesser Sunda Islands. The park includes the three larger islands Komodo, Padar and Rinca.",
    imageUrl: "https://images.unsplash.com/photo-1543160211-1da4b8893708?w=800&q=80",
    latitude: "-8.4716",
    longitude: "119.4673",
    rating: "4.9",
    category: "Nature",
    isFeatured: false
  }
];
