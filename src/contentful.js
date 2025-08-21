import * as contentful from "contentful";

console.log("Space ID:", import.meta.env.VITE_CONTENTFUL_SPACE_ID);
console.log("Access Token:", import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);

if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID || !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) {
  console.error("⚠️ Contentful environment variables are missing!");
}

export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
