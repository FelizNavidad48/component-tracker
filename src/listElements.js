const ListElement = () => {
    return(
        <div className=" border-solid border-2 border-indigo-500 rounded-lg w-2/5  ">
           <table className=" bg-indigo-500 text-white border-separate py-2 px-4 w-full">
        <tr>
            <th className="text-left">
                Component
            </th>
            <th className="text-right">
                Count 
            </th>
        </tr>
            
            </table> 
        </div>
    );
}

export default ListElement;