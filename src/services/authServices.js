import http from "./httpServices";

export async function singinApi(data) {
  return http.post(`/user/signin`, data).then(({ data }) => data);
}

export async function signupApi(data) {
  return http.post(`/user/signup`, data).then(({ data }) => data);
}

export async function getUserApi(options) {
  const data = http.get(`/user/profile`, options).then(({ data }) => data)
  // console.log(data)
  return data;
}
export async function getAllUsersApi(options) {
  return http.get(`/user/list`, options).then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post(`/user/logout`);
}

const userAuth = {
  singinApi,
  signupApi,
  logoutApi,
  getUserApi,
  getAllUsersApi,
};

export default userAuth;
