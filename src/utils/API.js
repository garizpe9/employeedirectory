import axios from "axios";

export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
