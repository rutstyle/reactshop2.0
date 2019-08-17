let prodUrl = "http://vueshop.glbuys.com";
let devUrl = "/proxy";
let baseUrl = process.env.NODE_ENV === "development" ? devUrl : prodUrl;
console.log(process.env.NODE_ENV);

export default {
    baseUrl,
    path: '/portal',
    token: '1ec949a15fb709370f'
}