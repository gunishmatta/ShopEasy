import { backendAPI } from "../../backend";

export const getAllProducts = () => {
  return fetch(`${backendAPI}/products`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
