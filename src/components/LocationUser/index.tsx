import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

interface Props {
  country: string;
  state: string;
  city: string;
}

export default function LocationUser({ country, state, city }: Props) {
  return (
    <div className="bg-white p-4 border-solid border-2 border-[rgba(0,0,0,.25)] rounded-md shadow-lg flex flex-col">
      <h3 className="flex items-center font-bold text-xl pb-2"><FaLocationDot className="text-xl pr-2" />Localização</h3>

      <span className="flex font-bold">
        <FaMapLocationDot className="text-2xl pr-2" />
        País: <span className="font-normal pl-2">{country}</span>
      </span>

      <span className="flex font-bold">
        <FaMapLocationDot className="text-2xl pr-2" />
        Estado: <span className="font-normal pl-2">{state}</span>
      </span>
      
      <span className="flex font-bold">
        <FaMapLocationDot className="text-2xl pr-2" />
        Cidade: <span className="font-normal pl-2">{city}</span>
      </span>
    </div>
  )
}