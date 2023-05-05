
import { FaSearch } from "react-icons/fa";
const Search = () => {
    return (<div className="border flex rounded-xl w-[15vw]">
        <input type="text" className="p-2 pl-5 w-full placeholder:text-xs text-xs rounded-tl-lg rounded-bl-lg" placeholder="Search" />
        <button className="p-2 bg-white rounded-tr-lg rounded-br-lg border-none outline-none"><FaSearch className="text-gray-600" /></button>
    </div>)
}

export default Search;