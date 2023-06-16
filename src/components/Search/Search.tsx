
import useSize from "@/hooks/useSize";
import cx from "clsx";
import { FaSearch } from "react-icons/fa";
const Search = ({handleSearch}:any) => {
    const { tablet, phone } = useSize()

    return (<div onClick={handleSearch} className={cx("border flex rounded-xl w-full", tablet && 'border-none')}>
        {tablet ? "" : <input type="text" className="p-2 pl-5 w-full placeholder:text-xs text-xs rounded-tl-lg rounded-bl-lg focus:outline-none border border-solid" placeholder="Search" />}
        <button className={cx("p-2 bg-white rounded-tr-lg rounded-br-lg border-none outline-none", tablet && '!bg-secondary ml-auto')}><FaSearch className={cx("text-gray-600", tablet && 'text-white text-xl')} /></button>
    </div>)
}

export default Search;
