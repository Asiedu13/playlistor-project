export function SubmitButton(props) {
  return (
    <button
    //   onClick={props.onSubmit}
      className={`w-[98%] flex justify-center items-center border-2 .border-solid border-[#CCCFCE66] .bg-[#00100B] bg-specifics p-5 my-[30px] h-[20px] .w-[inherit] text-[14px] text-[#fff] border-none rounded md:w-[99%]`}
    >
      {props.children}
    </button>
  );
}
