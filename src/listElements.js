const ListElement = ({component, count}) => {
    return(
        <div className=" border-solid border-2 border-indigo-500 rounded-lg w-2/5  ">
           <table className=" bg-indigo-500 text-white border-separate py-2 px-4 w-full">
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
    );
}

export default ListElement;