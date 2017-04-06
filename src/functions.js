export const fetchCampersData = (setCampers) => {
    return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(campers => {
      return campers;

  });
}
export function sortData(id, campers) {
  /*
  notes: default order is by recent.

  takes an array of object and resorts them by one of two Key Values:
  1. alltime
  2. recent

  uses variable order to determine which key value to order array.
  */

  //campers is an array of objects.

  console.log(campers);

  if(id == 'recent'){
    campers.sort((a,b)=> b.recent - a.recent)
  }
  else {
    campers.sort((a,b)=> b.alltime - a.alltime)
  }

return campers;

  //RE-SORT BY RECENT
  // campers.forEach(camper => {
  //   camper.recent
  // });

  //RE-SORT BY alltime
  // data.sort((a,b) => b.alltime - a.alltime)

}

/*
onclick functionality:
user clicks on a sortable column header (located in Leaderboard.js)
onclick captures the identifier of the specific column
the id is passed to a handler function (does this need to be a new function in the Leaderboard constructor or can it?)
*/
