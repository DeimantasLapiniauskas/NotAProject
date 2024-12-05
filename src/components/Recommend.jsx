import { getAllData } from "./helpers/get"
function Recommended () {
    async function data () {
        const movies = await getAllData();
        // console.log(movies);
        return movies;
    }

const aeds = data()
console.log(aeds);


return( <>
{aeds}
</>)
}
export default Recommended