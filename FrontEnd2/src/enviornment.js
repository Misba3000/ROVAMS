let IS_PROD = true;
const server = IS_PROD
    ? "https://zoomclonebackend-mdfd.onrender.com"
    : "http://localhost:8080";

export default server;
