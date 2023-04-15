import React from "react";
import "./Details.css";

const Details = (props) => {
  return (
    <main className="text-white">
      <div className="bg-[#3f3f3f] flex justify-evenly pt-7 px-36">
        <div className="flex flex-col justify-around w-1/3">
          <div className="title-manager">Manager</div>
          <div className="text-5xl">Erik Ten Hag</div>
          <div className="w-1/2 text-3xl italic font-light">
            "I will help Manchester United dominate the English Premier League"
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://resources.premierleague.com/premierleague/photos/players/250x250/man41668.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-60 text-2xl">
          <div className="mt-12 flex flex-col">
            <span>wins:</span>
            <span>25</span>
          </div>
          <div className="mt-12 flex flex-col">
            <span>wins:</span>
            <span>25</span>
          </div>
          <div className="mt-12 flex flex-col">
            <span>wins:</span>
            <span>25</span>
          </div>
        </div>
      </div>
      <div className="manager-info">
        <div className="border-b-4 border-y-[#ccc]">
          <p className="text-[gray] text-lg my-4">BIOGRAPHY</p>
          <p className="text-xl text-black my-4 normal-case">
            Former Manchester United and Norway striker Ole Gunnar Solskjaer
            returned to Old Trafford in a very different role on 19 December
            2018, when he was appointed as the club's caretaker manager.
          </p>
        </div>
        <div className="text-black flex capitalize">
          <div className="detail-item">
            <div className="sub-detail-item">
              <p className="text-xl text-[gray] mt-4">POSITION</p>
              <p className="detail-item-posiotion">manager</p>
            </div>
            <div className="sub-detail-item">
              <p className="text-xl text-[gray] mt-2">JOINED</p>
              <p className="text-2xl text-[#97212d] mt-5 font-bold">
                21 Apr 2022
              </p>
            </div>
          </div>
          <div className="detail-item">
            <div className="sub-detail-item">
              <p className="text-xl text-[gray] mt-4">COUNTRY</p>
              <p className="detail-item-posiotion">Holand</p>
            </div>
            <div className="sub-detail-item">
              <p className="text-xl text-[gray] mt-2">FIRST MATCH</p>
              <p className="text-2xl text-[#97212d] mt-5 font-bold">
                7 Aug 2022<small className="text-[blue]"> (V Brighton)</small>
              </p>
            </div>
          </div>
          <div className="detail-item">
            <div className="sub-detail-item">
              <p className="text-xl text-[gray] mt-4">DATE OF BIRTH</p>
              <p className="text-2xl text-[#97212d] mt-5 font-bold">
                2 Feb 1970
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
