export function TextInput(props) {
  let defType = props.visible ? "text" : props.type;
  return (
    <div className="flex flex-col ">
      <label className="text-sm text-specifics">{props.name}</label>
      <div className="w-[98%] h-[99%] p-[1px] flex grow border-2 border-solid .border-[#CCCFCE66] border-background my-2 rounded-lg md:w-[98%] relative">
        <input
          className="flex focus:ring-blue-500 focus:border-blue-500 h-[40px] pl-3 .border-gray-300  focus:outline-none 
          text-gray-400 pr-1 font-mono 
           js-password sm:w-[100%] md:w-[100%]"
          type={defType}
          name={props.name}
          //   placeholder={props.placeholder || " "}
          autoComplete="off"
          //   value={props.value}
          //   onChange={(e) =>
          //     props.onChange(e.target.value, props.name.toLowerCase())
          //   }
        />{" "}
        {props.type == "password" ? (
          <div className="border-solid border-2 border-[#CCCFCE66] border-y-0 border-r-0 p-2 absolute cursor-pointer flex justify-center items-center w-[50px] right-0 md:w-[15%]">
            {props.children || ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
