import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "f492r1be",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
