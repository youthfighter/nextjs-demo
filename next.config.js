const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://youthfighter.oss-cn-beijing.aliyuncs.com' : '',
}
