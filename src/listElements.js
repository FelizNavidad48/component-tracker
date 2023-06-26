
import Button from "./button";
import {RxCross2} from 'react-icons/rx';
import { deleteItem } from "./databaseFunctions";

const ListElement = ({id, component, count}) => {
    return(
        <div className="flex space-x-3 w-2/5 h-11">
            
        <div className="grow border-solid border-2 border-indigo-500 rounded-lg">
           <table className=" bg-indigo-500 text-white border-separate h-full px-3 w-full">
        <tbody>
            
        <tr>
            <th className="text-left">
                {component}
            </th>
            <th className="text-right">
                {count}
            </th>
        </tr>
            
        </tbody>

            </table> 


        </div>

            <div  onClick={() => deleteItem(id)} >
                <Button tyle={' bg-indigo-500 border-indigo-500 hover:bg-blue-700'} icon ={<RxCross2 className=" text-white" size="28"/>}/>
            </div>
        </div>

    );
}

export default ListElement;