import API from "./api-config";
const login = (email: string, password: string) => {
  const body = {
    email: email,
    password: password,
  };
  return API.post("/users/login", body);
};

const auth = {
  login: login,
};

export default auth;
