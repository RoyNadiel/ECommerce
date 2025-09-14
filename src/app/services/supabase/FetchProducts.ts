import { createClient } from "./client"
import { Shoe } from "../../types/types.";

export async function getShoes(): Promise<Shoe[]> {
  const supabase = await createClient();

  const { data: shoes, error } = await supabase
    .from<any, Shoe>("shoes")
    .select("shoes_id, name, size, price, image_url, categories(name)");

  if (error) {
    console.error("Error fetching shoes:", error);
    return [];
  }

  return shoes ?? [];
}
