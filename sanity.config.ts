import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postType } from "./sanity/schema";

export default defineConfig({
  name: "lydia-blog",
  title: "Lydia Blog",
  projectId: "f492r1be",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postType],
  },
});
