"use client";
import Image from "next/image";
import { useState } from "react";
import { useCategoryQuery, useDuasByCategoryQuery } from "../Features/Dua/duaApi";
import a from "./a.png";
import audio from "./audio.png";
import light from "./light.png";




const Group500 = () => {


  const { data } = useCategoryQuery()

  const [selectedCategory, setSelectedCategory] = useState(1)
  const { data: duas } = useDuasByCategoryQuery({ "cat_id": selectedCategory })
  const [key, setKey] = useState(0)

  const handleCategoryClick = (categoryId) => {
    console.log("categoty id : ", categoryId);
    setSelectedCategory(categoryId);
    setKey((prevKey) => prevKey + 1)
  };



  return (
    <div key={key} className="flex flex-col sm:flex-row h-screen border-15 gap-4">
      {/* Left Panel */}
      <div className="flex flex-col w-full sm:w-[350px] border-15 items-center">
        <div style={{ maxHeight: "calc(100vh - 64px)" }} className="overflow-y-auto">
          <div className="flex flex-col w-full h-[750px] items-center gap-3 overflow-y-auto">
            <span className="block w-full bg-green-500 px-8 text-center p-4">Categories</span>
            <span className="px-2 flex bg-[#E2E2E2] items-center p-3 w-full border-[1.5px]">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20a10 10 0 100-20 10 10 0 000 20zM21 21l-5-5"
                  />
                </svg>
                <span className="ml-1">Search by Category</span>
              </button>
            </span>
            <div>
              {data && data.map((category) => (
                <div key={category.id} className="flex w-full  items-center bg-[#E2E2E2] border-[1.5px] p-4">
                  {/* Render category name and subcategory count */}
                  <span className="mb-2 w-full justify-between space-y-8"><button onClick={() => handleCategoryClick(category.id)}>{category.cat_name_en}</button><br />Sub Category:{category.no_of_subcat}</span>
                  {/* Render dua count */}
                  <span className="text-sm">{category.no_of_dua} Dua</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col w-full sm:w-[900px] bg-[#EBEEF2] p-4 rounded shadow">
        <div style={{ maxHeight: "calc(100vh - 64px)" }} className="overflow-y-auto">
          {duas &&
            selectedCategory &&
            duas
              .filter((duaData) => duaData.cat_id === selectedCategory)
              .map((dua, index) => (
                <div key={dua.id || index} className="bg-white p-4 rounded shadow mb-4">
                  {/* Render dua content */}
                  <p className="font-bold flex gap-3 items-center text-green-500"><Image className="w-[35px] h-[35px]" src={a} />{dua.dua_name_en}</p>
                  <br/>
                  <p>{dua.top_en}</p>
                 
                  <br/>
                  <p className="font-extrabold text-3xl">{dua.dua_arabic}</p>
                  <br/>
                  <p>{dua.dua_indopak}</p>
                  <p>{dua.clean_arabic}</p>
                  <br/>
                  <p>{dua.transliteration_bn}</p>
                  <br/>
                  <p>{dua.transliteration_en}</p>
                  <br/>
                  <p>{dua.translation_bn}</p>
                  <br/>
                  <p>{dua.translation_en}</p>
                  <br/>
                  <p>{dua.bottom_bn}</p>
                  <br/>
                  <p>{dua.bottom_en}</p>
                  <br/>
                  {dua.refference_bn && (
                    <p className="text-green-500">Reference (Bengali): {dua.refference_bn}</p>
                  )}
                  {dua.refference_en && (
                    <p className="text-green-500">Reference (English): {dua.refference_en}</p>
                  )}
                  <br/>
                  {dua.audio && (
                    <a href={dua.audio} target="_blank" rel="noopener noreferrer">
                      <Image className="size-[44px]" src={audio} alt="Audio" />
                    </a>
                  )}
                </div>
              ))}
        </div>
      </div>








      {/* Right Panel */}
      <div className="w-full sm:w-[330px] bg-[#FFFFFF] justify-center space-y-4 items-center rounded-[0.5px]">
        <p className="text-center font-semibold text-[#393939] items-center justify-center">Setting</p>


        <div className="flex justify-center items-center ">

          <div className="flex flex-col items-center gap-6 justify-center p-4">
            <input className="p-4 w-[289px] h-[55px] top-[154px] left-[21px] bg-[#F7F8FA]" placeholder="Language Setting" />
            <input className="p-4 w-[289px] h-[55px] top-[154px] left-[21px] bg-[#F7F8FA]" placeholder="General Setting" />
            <input className="p-4 w-[289px] h-[55px] top-[154px] left-[21px] bg-[#F7F8FA]" placeholder="Font Setting" />

            <p1 className="p-4  justify-center items-center text-green-500 w-[289px] h-[55px] top-[154px] left-[21px] bg-[#F7F8FA]">Appearance Settings</p1>
            <p1 className="p-4 flex border justify-between items-center w-[289px] h-[55px] top-[154px] left-[21px] " >Night Mood<Image className="w-[30px] h-[16px]" src={light} /></p1>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Group500;
