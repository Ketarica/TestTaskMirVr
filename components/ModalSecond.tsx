import React from "react";
const ModalCard = [
    {
      id: 1,
      image: "/assets/Heart.png",
      percent: "45.5%",
      title: "пациентов с",
      titleBold: "сердечной недостаточностью",
      description: "Популяционное когортное исследование (N=385)",
      additional: "1"
    },
    {
      id: 2,
      image: "/assets/Human.svg",
      percent: "55,3%",
      title: "пациентов с",
      titleBold: "инфарктом миокарда",
      description: "Апостериорный анализ когортного исследования (N=2887)",
      additional: "1"
    },
    {
      id: 3,
      image: "/assets/VectorGlass.png",
      percent: "50,5%",
      title: "пациентов с",
      titleBold: "раком мочевого пузыря",
      description: "Исследование Национальной статистической службы (N=42642)",
      additional: ""
    },
  ];
export default function ModalSecond({visibleSecond, onCloseSecond}:any) {
    if (!visibleSecond) return null;
    const handleOnCloseSecond = (interaction:any) => {
    if(interaction.target.id === 'moduleSecond')
    onCloseSecond();
    };
  return (
    <div id="moduleSecond" onClick={handleOnCloseSecond} className="z-[2] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
       <div className="bg-white rounded-2xl w-[1290px] h-[873px] sm:border-[#01457A] sm:border sm:max-2xl:w-auto sm:max-2xl:w-[900px] sm:max-2xl:h-[540px]" >
       <h1 className="font-bold text-left text-[24px] text-[#01457A] mx-[38px] mt-[40px] sm:max-2xl:text-[15px] sm:max-2xl:mx-[38px]">
       Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.
        </h1>
        <h1  className="font-normal text-left text-[24px] text-[#01457A] mx-[38px] mb-[40px] mt-[9px] sm:max-2xl:text-[15px] sm:max-2xl:mx-[38px]"> 
        В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2 </sup>
         Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
        </h1>
        <h1 className="font-bold text-center text-[#01457A] text-[30px] mb-[40px] sm:max-2xl:text-[20px] sm:max-2xl:mx-[38px]"> Пятилетняя выживаемость пациентов </h1>


        <div className="flex flex-col sm:flex-row items-center justify-between">
        {ModalCard.map((card, indexMod) => {
            
          return (
            <div key={indexMod} className="rounded-2xl sm:border-[#01457A] sm:border 
                                          flex flex-col items-center w-[367px] h-[468px] bg-[#FDD96640] mx-[38px] mb-[40px]
                                          sm:max-2xl:w-[200px] sm:max-2xl:h-[238px]">  
              <div className = "mx-[38px] mt-[38px] sm:max-2xl:w-[50px] sm:max-2xl:mt-[10px]"> <img src = {card.image} /> </div> 
              <h1 className="relative text-[#01457A] font-bold text-[98px] text-center max-h-[130px] sm:max-2xl:text-[25px]">{card.percent} </h1>
              <h1 className="text-[#01457A] font-normal text-[26px] text-center mb-[15px] sm:max-2xl:text-[16px]">{card.title} <span className="font-bold ">{card.titleBold}<sup className="text-[19px] sm:max-2xl:text-[11px]">{card.additional}</sup></span></h1>
              <h1 className="text-[#01457A] font-light text-[18x] text-center mb-[30px] sm:max-2xl:text-[12px]"> {card.description}</h1>
            </div>
          );
        })}
      </div>
       </div>
    </div>
  );
}