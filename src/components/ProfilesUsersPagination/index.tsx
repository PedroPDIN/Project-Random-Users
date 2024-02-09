import { IUserData } from "@/interfaces/IDataUser";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
  data: IUserData[];
  page: number;
  seed: string; 
  limit: number;
  valueColumns?: number
}

const defineClassContainer = (columns: number | undefined): string => {
  if (columns === 4) return "grid grid-cols-4 gap-4";
  return "grid grid-cols-3 gap-4"
} 

export function ProfilesUsers({
  data,
  page,
  limit, // limitação da requisição dos usuários
  seed,
  valueColumns,
}: Props) {

  const structureUrl = (name: string): string => {
    return `/user/${name.split(" ").join("-").toLowerCase()}?page=${page}&limit=${limit}&seed=${seed}`
  }

  return (
    <div className={defineClassContainer(valueColumns)}>
      {data.map((person) => (
        <Link
          href={structureUrl(person.name)}
          key={person.name}
          className="bg-white shadow-inner rounded-md flex flex-col items-center px-4 pb-4 space-y-4 cursor-pointer w-[250px] relative overflow-hidden transition ease-out border-solid border-2 border-[rgba(0,0,0,.25)]"
        >
          <div className="bg-[#2c2e31] w-full h-[32%] absolute z-0 pt-4"></div>

          <Image
            src={person.picture.large}
            alt="profile-person"
            width={140}
            height={140}
            className="rounded-full p-1 border-solid border-2 border-[rgba(0,0,0,.25)] z-10 bg-white"
          />

          <h2 className="font-bold">{person.name}</h2>

          <div className="flex text-3xl gap-4 text-[#2c2e31] " >
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <MdEmail
                    data-tooltip-target="tooltip-default"
                    className="hover:text-[#4e5157] transition ease-out"
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-[#4e5157] border-0">
                  <p className="text-white font-bold">{person.email}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <FaMapLocationDot
                    data-tooltip-target="tooltip-default"
                    className="hover:text-[#4e5157] transition ease-out" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#4e5157] border-0">
                  <p className="text-white font-bold">{`${person.city} - ${person.country}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <BsFillTelephoneFill
                    data-tooltip-target="tooltip-default"
                    className="hover:text-[#4e5157] transition ease-out text-2xl" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#4e5157] border-0">
                  <p className="text-white font-bold">{person.cell}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Link>
      ))}
    </div>
  )
}