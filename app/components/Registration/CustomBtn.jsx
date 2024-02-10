export function CustomBtn(props) {
  return (
    <button
      onClick={props.clickHandler}
      className={`w-[98%] flex justify-center items-center border-2 border-solid .border-[#CCCFCE66] border-background bg[#fff] p-3 mb-[20px] h-[40px] text-[14px] rounded text-[#808785] font-medium  md:w-[99%]`}
    >
      {props.children}
    </button>
  );
}
