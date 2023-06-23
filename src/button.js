
const Button = ({tyle, icon}) => {
   return( 
            <div className={"float-right wborder-solid border-2 rounded-lg w-11 h-11 flex items-center justify-center" + tyle} a="#">
                {icon}
            </div>
   );
}


export default Button