export const fetchCampersData = (setCampers) => {
    return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(campers => {
      return campers;

  });
}
