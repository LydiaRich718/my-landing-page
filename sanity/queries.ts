import { client } from "./client";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Post extends PostMeta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
}

export async function getAllPosts(): Promise<PostMeta[]> {
  return client.fetch(
    `*[_type == "post"] | order(date desc) {
      "slug": slug.current,
      title,
      date,
      description,
      tags
    }`
  );
}

export async function getAllSlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "post"].slug.current`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      date,
      description,
      tags,
      body
    }`,
    { slug }
  );
}
