import http from "./httpServices";

export function getListCategory(){
    return http.get('/list')
}