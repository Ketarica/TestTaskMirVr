import Image from "next/image";
import React from "react";


const ClaudPic = [
    <Image 
    src= "/assets/DecorWhite.png"
    alt="whiteThing"
    width={1335}
    height={110}
    className="sm:max-2xl:w-[1024px]"
  />
]
const RectYellow = [
    <Image 
    src= "/assets/RectYellow.png"
    alt="RectYellow"
    width={1290}
    height={83}
    className="sm:max-2xl:w-[1024px]"
  />
]
const PointerDown = [
  <Image 
  src= "/assets/PointerDown.png"
  alt="RectYellow"
  width={425}
  height={54}
/>
]


const InfoCard = [
    {
      id: 1,
      title: "Ингаляционный",
      subTitleBold: "антихолинергик",
      subTitleRest: " ",
      description: "Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов",
      descriptionSup:"1",
      image: "/assets/inh1.png",
    },
    {
      id: 2,
      title: "Ингаляционный",
      subTitleBold: "β2-агонист",
      subTitleRest: " ",
      description: "Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции",
      descriptionSup:" ",
      image: "/assets/inh2.png",
    },
    {
      id: 3,
      title: "Ингаляционный",
      subTitleBold: "глюкокортикостероид",
      subTitleRest: "(ИГКС)",
      description: "Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей",
      descriptionSup:" ",
      image: "/assets/inh3.png",
    },
  ];

const SubBlockTherapy = () => {
  return (
<div className="mt-[100px] px-[46px]">

     <div> 
      <div  className="absolute">
         <p className="text-[#01457A] font-bold text-[40px]"> Терапия ХОБЛ: что в фокусе? </p>  
         </div>
         <div className="mb-[40px] sm:max-2xl:w-full"> {ClaudPic} </div>
     </div>
     <div>
        <h1 className="absolute text-[#01457A] font-bold text-[28px] my-[10px] 
                       mx-[10px] w-auto min-h-[38px] mt-[20px] 2xl:ml-[80px]
                       sm:max-2xl:text-[20px] sm:max-2xl:mt-[13px] sm:max-2xl:text-center sm:max-2xl:ml-[60px] "> Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии </h1>
        <div className="mb-[40px] sm:max-2xl:ml-[10px]"> {RectYellow} </div>
     </div>
     <div>
        <h1 className="text-[#01457A] font-bold text-[24px] text-center mb-[40px]"> Приоритетные направления фармакотерапевтической стратегии при ХОБЛ <sup>1</sup>: </h1>
     </div>


     <div className="flex flex-col sm:flex-row items-center justify-between sm:max-2xl:flex-col sm:max-2xl:gap-y-[15px] sm:max-xl:gap-y-[15px] sm:max-xl:flex-col ">
        {InfoCard.map((card, index) => {
            
          return (
            <div key={index} className="rounded-2xl sm:border flex flex-col items-center w-[410px] h-[608px] bg-gradient-to-r from-stone-50 to-sky-100 shadow-xl">   
             
            <Image 
             src= {card.image}
             alt="cardImg"
             width={178}
             height={145}
             className="flex mt-[30px]"
             />
              <div className="text-[#01457A] font-base text-[28px] text-center"> <h1 className="my-[15px] mx-[80px]">{card.title} <span className="font-bold">{card.subTitleBold}</span> {card.subTitleRest} </h1> </div>
              <div className="text-[#01457A] font-base text-[24px] text-center mb-[30px]"> <h1> {card.description} <sup>{card.descriptionSup}</sup></h1></div> 
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <div className="flex flex-row mb-[20px] gap-[30px] sm:max-2xl:hidden"> {PointerDown} {PointerDown} </div>
        <div className="flex flex-row mb-[20px] gap-[30px] sm:max-2xl:visible 2xl:hidden"> {PointerDown} </div>
      </div>
        <div className="flex flex-row gap-[20px]"> 
            <div className="rounded-2xl sm:border flex flex-col items-center shadow-xl w-[630px] h-[430px] bg-gradient-to-r from-stone-50 to-sky-100 sm:max-2xl:h-[500px]">  
              <h1 className="text-[#01457A] font-base text-[24px] text-left my-[30px] mx-[30px]">  Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
              Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга <sup>1 </sup>.</h1>
            </div>

            <div className="rounded-2xl sm:border flex flex-col items-center shadow-xl shadow-inner w-[630px] h-full bg-gradient-to-r from-stone-50 to-sky-100">   
             <div className="text-[#01457A] font-base text-[24px] text-left my-[30px] mx-[30px]"> 
             <h1> Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; </h1>
             <h1> Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%) <sup>1 </sup>.</h1> 
            </div>
            </div>
        </div>
</div>
  );
};
export default SubBlockTherapy;