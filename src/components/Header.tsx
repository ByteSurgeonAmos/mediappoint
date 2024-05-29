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
    <div className=" header-bg-opacity bg-cover bg-center p-2  space-y-3 flex flex-col  max-md:w-screen">
      <div className="flex justify-between">
        <Image
          src="/medicapointlogo.jpg"
          alt="medinfologo"
          height={70}
          width={100}
        />
        <Button text="Join Now " />
      </div>
      <div className="w-full h-[12px]"></div>
      <div className="w-[1315px] h-[342px]  max-md:w-screen">
        <div className="w-[1315px] h-[193px]  flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-[1115px] h-[154px]  text-white text-balance text-center   text-4xl pt-4 font-semibold max-md:w-screen">
            <p className=""> Schedule your next Appointment </p>
            <p className="">Hassle free</p>
          </div>
          <div className="w-[713px] h-[29px] text-center text-white max-md:w-screen">
            Find and Book your favorite Healthcare Professional near you
          </div>
        </div>
        <div className="w-full h-[74px]  flex justify-evenly max-md:flex-col">
          <div className="w-[551.5px] h-[44px] max-md:w-screen max-md:mt-2">
            <Select>
              <SelectTrigger className="w-[551.5px]  border border-white font-semibold max-md:w-screen">
                <SelectValue placeholder="Select a speciality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">1</SelectItem>
                <SelectItem value="week">2</SelectItem>
                <SelectItem value="month">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[551.5px] h-[44px] max-md:mt-2 max-md:w-creen">
            <Select>
              <SelectTrigger className="w-[551.5px] border border-white font-semibold max-md:w-screen">
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
          <button className="max-md:mt-2 sm:w-[104px] h-[44px] bg-[#3454D1] text-white max-md:w-screen max-md:h-[3rem]">
            Search
          </button>
        </div>
      </div>
      <div className="w-[1312px] h-[136px]   flex flex-col items-center justify-center text-white max-md:w-screen">
        <div className="w-[425px] h-[77px]  font-semibold text-3xl text-center flex items-center justify-center max-md:w-screen">
          Easy as 1-2-3
        </div>
        <div className="w-[508px] h-[38px]  text-sm text-wrap text-center max-md:w-screen">
          Discover, book and experience personalized healthcare effortlessly
          with our user-friendly Doctor Appointment Website
        </div>
      </div>
    </div>
  );
}

export default Header;
