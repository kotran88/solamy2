const PUSH_APP_ID = "a7627c17-c314-4d42-b7d3-2f8369a77e09";

// const SERVER_IP = "192.168.2.131";
const SERVER_IP = "solarmy.cafe24app.com";
// const SERVER_IP = "localhost:3200";
const HTTP_PORT = 8001;
var IMG_URL = "http://" + SERVER_IP + "/solarmy_server/uploads/";     // url of http server
var ESCRO_URL = "http://" + SERVER_IP + "/solarmy_admin/escro/escro";     // url of http server

export const CONFIG = {
    http_server : "http://"+SERVER_IP,    
    IMG_URL : IMG_URL,
    PUSH_APP_ID : PUSH_APP_ID,
    ESCRO_URL:ESCRO_URL
};
