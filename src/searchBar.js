import Button from "./button";
import {AiOutlineSearch} from 'react-icons/ai';
import {IoAdd} from 'react-icons/io5';
import { writeData } from "./databaseFunctions";
import { addData } from "./popUp";


const SearchBar = () => {
    return(
        <div className="flex w-2/5 space-x-3"> 
            <input type="text" id="search" className=" px-3 grow border-solid border-2 rounded-lg h-11 float-left"></input>
            <div >
                <Button tyle={""} icon ={<AiOutlineSearch size="32"/>}/>
            </div>
            <div onClick={() => addData()}>
                <Button tyle={""} icon ={<IoAdd size="32"/>} />
            </div>
        </div>

    );
}
export default SearchBar;