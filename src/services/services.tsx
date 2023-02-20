import http from "../http-common";

const authCreate = (data) =>  {
    return http.post("/sign", data);
  }


export default authCreate;