export const fetchCampersData = (setCampers) => {  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(campers => {

      console.log(setCampers);
      setCampers(campers)

  });




}

export const raw = [{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":4457,"recent":570,"lastUpdate":"2017-03-17T17:49:57.266Z"},{"username":"forkerino","img":"https://avatars.githubusercontent.com/u/16620061?v=3","alltime":1244,"recent":545,"lastUpdate":"2017-03-17T17:49:58.192Z"}]
