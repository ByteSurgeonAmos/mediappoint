import Image from "next/image";
import Button from "./Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function Header() {
  return (
    <div className="pb-[2rem] header-bg-opacity bg-cover bg-center header  bg-black-opacity-10  space-y-3 flex flex-col  max-md:w-screen">
      <div className="flex justify-between h-[50px]">
        <Image src="/3.png" alt="mediappointlogo" height={50} width={100} />
        <Button text="Join Now " />
      </div>
      <div className="w-full h-[12px]"></div>
      <div className="w-[1315px] h-[342px]  max-md:w-screen">
        <div className="w-[1315px] h-max center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-[1115px] h-max max-md:text-2xl   text-white text-balance text-center font-700     pt-4 font-semibold max-md:w-screen">
            <p className=" sm:text-[64px]"> Schedule your next Appointment </p>
            <p className="sm:text-[64px]">Hassle free</p>
          </div>
          <div className="w-[713px] h-max sm:text-[24px] font-600 text-center text-white max-md:w-screen">
            Find and Book your favorite Healthcare Professional near you
          </div>
        </div>
        <div className="w-full sm:h-[74px]   max-md:items-center flex justify-evenly max-md:flex-col border-none rounded-[24px] items-center sm:bg-[#EAEAEA]">
          <div className="w-[551.5px] h-[44px] max-md:w-screen max-md:mt-2 md-max:p-2 max-md:justify-center max-md:flex">
            <Select>
              <SelectTrigger className="w-[551.5px]  border border-white font-semibold max-md:w-[80%] md-max:p-2">
                <SelectValue placeholder="Select a speciality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">1</SelectItem>
                <SelectItem value="week">2</SelectItem>
                <SelectItem value="month">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[551.5px] h-[44px] max-md:mt-2 max-md:w-screen md-max:p-2 max-md:justify-center max-md:flex">
            <Select>
              <SelectTrigger className="w-[551.5px] border border-white font-semibold max-md:w-[80%]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">1</SelectItem>
                <SelectItem value="week">2</SelectItem>
                <SelectItem value="month">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-fit max-md:hidden">
            <Image src="/vector.svg" alt="filter" width={39} height={33} />
          </div>
          <button className="max-md:mt-2 sm:w-[104px] sm:h-[44px] bg-[#3454D1] text-white max-md:w-[8rem] max-md:p-2">
            Search
          </button>
        </div>
      </div>
      <div className="w-[1312px] h-[136px] pt-[20px]  flex flex-col items-center justify-center text-white max-md:w-screen">
        <div className="w-[425px] sm:h-[77px]  font-semibold sm:text-[64px] max-md:text-2xl text-center flex items-center justify-center max-md:w-screen">
          Easy as 1-2-3
        </div>
        <div className="sm:w-[508px] sm:h-[38px] font-400 sm:text-[16px] max-md:text-sm text-wrap text-center max-md:w-[90%] p-1">
          Discover, book and experience personalized healthcare effortlessly
          with our user-friendly Doctor Appointment Website
        </div>
      </div>
    </div>
  );
}

export default Header;
