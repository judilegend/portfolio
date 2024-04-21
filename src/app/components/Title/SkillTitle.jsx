/** @format */

export default function SkillTitle({ title, className }) {
  return (
    <div className={`w-fit ${className}`}>
      <p className=" font-medium  text-[20px] text-white ">{title}</p>
      <div className="h-[3px] w-[75%] mt-1 bg-white"></div>
    </div>
  );
}
