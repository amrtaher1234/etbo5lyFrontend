import axios from "axios";
const getApiBaseUrl = () => {
  const currentEnv = process.env.REACT_APP_CURRENT_ENV || "staging";
  const endPointKey = `REACT_APP_${currentEnv.toUpperCase()}_ENDPOINT`;
  return "http://localhost:3000";
  return process.env[endPointKey];
};
const instance = axios.create({
  baseURL: getApiBaseUrl(),
  //   responseType: "json",
  //   headers: {
  //     "X-Locale": Intl.DateTimeFormat().resolvedOptions().timeZone,
  //   },
});
instance.interceptors.response.use((resp) => {
  if (resp.status === 204) {
    return resp;
  } else {
    return resp.data.data;
  }
});
// instance.interceptors.request.use(async req => {
//   let userToken = '';
//   if (authenticationFire.currentUser) {
//     userToken = await authenticationFire.currentUser.getIdToken();
//   } else {
//     userToken = window.atob(localStorage.getItem('user_token'));
//   }
//   req.headers['Authorization'] = userToken;
//   return req;
// });
export default instance;
