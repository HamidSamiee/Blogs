import http from "./httpServices";


export async function signUpApi(data) {
  return await http.post( '/user/signup',data).then(({data})=>data.data)  
}

export async function signInApi(data) {
    return await http.post('/user/signin',data).then(({data})=>data.data)  
  }