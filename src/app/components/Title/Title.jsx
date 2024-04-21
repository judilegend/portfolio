/** @format */

export default function Title({ title }) {
  const titleUp = title;
  return (
    <div className="w-fit">
      <p className="  font-semibold   text-[32px] max-md:text-[28px] text-black ">
        {titleUp.toUpperCase()}
      </p>
      <div className="h-1 w-[75%] mt-1 back-gradient2"></div>
    </div>
  );
}
