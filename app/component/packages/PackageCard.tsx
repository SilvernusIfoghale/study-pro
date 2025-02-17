import Image, { StaticImageData } from "next/image";

type PackageProps = {
  heading: string;
  text: string;
  color: string;
  icon: StaticImageData;
};

export default function PackageCard({
  heading,
  text,
  color,
  icon,
}: PackageProps) {
  return (
    <div className="shadow-sm min-w-72 sm:min-w-52 h-72 p-7 hover:scale-105 duration-500">
      <div
        className={`${color} w-16 h-16 rounded-lg grid place-content-center`}
      >
        <Image src={icon} alt="" width={23} />
      </div>
      <h3 className="my-5 text-lg">{heading}</h3>
      <span className="block h-1 w-14 bg-danger-color"></span>
      <div className="w-40">
        <h4 className="text-second-text-color mt-5">{text}</h4>
      </div>
    </div>
  );
}
