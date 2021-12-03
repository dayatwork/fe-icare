module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/institution',
        permanent: false,
      },
      // {
      //   source: '/my-institution',
      //   destination: '/my-institution/customers',
      //   permanent: false,
      // },
    ]
  },
}
