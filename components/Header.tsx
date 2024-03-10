import Image from "next/image";
import React from "react";

const Header = () => {
  return (     
      <div className="flex items-center">  
      <div className="absolute 2xl:w-[1039px] 2xl:ml-[390px] lg:w-[490px] lg:mb-[70px] xl:w-[840px] xl:mt-[50px] 2xl:mb-[60px]
                      md:w-[360px] md:mt-[15px] md:ml-[345px] 2xl:mt-[21px]"> 
      <Image
      src= "/assets/DecorYellow.png"
      alt="YellowThing"
      width={1039}
      height={67}
      className="left-0 top-0 2xl:ml-[700px] xl:ml-[600px] lg:ml-[100px] lg:mt-[40px] m-[0] 2xl:mt-[70px] lg:mt-[35px] lg:h-[50px] z-[1] sm:max-2xl:w-auto lg:w-[500px]"
    />
    </div>
    <div className="absolute w-[40px] 2xl:w-[939px] 2xl:ml-[300px] xl:w-[1000px] lg:w-[480px] lg:mt-[40px] lg:mt-[30px] xl:w-[800px] 
                    // 2xl:mr-[100px] md:w-[540px] md:mt-[15px] md:ml-[105px] 2xl:mb-[60px] xl:mt-[40px]"> 
      <Image  
      src= "/assets/DecorGreenYellow.png"
      alt="GreenYellowThing"
      width={939}
      height={69}
      className="left-0 top-0 2xl:l-[200px] lg:ml-[250px] lg:mt-[-10px] m-[0] xl:ml-[300px] 2xl:mt-[80px] z-[1] sm:max-2xl:w-auto 2xl:ml-[250px]"
     
    />
    </div>
    <div className="absolute 2xl:w-[1319px] xl:w-[1200px] w-[40px] lg:w-[700px] lg:mb-[40px] lg:mr-[500px]
                     xl:mt-[10px] 2xl:mt-[-25px] md:w-[540px] md:mb-[35px] 2xl:pt-[60px]"> 
      <Image
      src= "/assets/DecorWhite.png"
      alt="whiteThing"
      width={1247}
      height={77.12}
      className="left-0 top-0 mt-[77.12px] z-[1] sm:max-2xl:w-auto "
    />
    </div> 
    </div>
  );
};

export default Header;