const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function fetchEntries(entry) {
  const entries = await client.getEntries({ content_type: entry })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}