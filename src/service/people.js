import axios from "axios";

const getPeople = () => {
  return axios
    .get("https://swapi.dev/api/people")
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
const detailPeople = (id) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};

const nextPage = (url) => {
  return axios
    .get(`${url}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export { getPeople,detailPeople,nextPage };
