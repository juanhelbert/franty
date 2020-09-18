const withSass = require('@zeit/next-sass')
module.exports = withSass({
  env: {
    'NEXT_PUBLIC_CONTENTFUL_SPACE_ID': process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN': process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  }
})
