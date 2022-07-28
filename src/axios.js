import axios from "axios";
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
//what the above part does is append whatever you want gets appended
// to the base url
// so like instance.get(/footbar) footbar get appended to base url 
export default instance;
 