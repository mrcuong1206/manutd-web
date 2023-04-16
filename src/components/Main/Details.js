import React from "react";
import "./Details.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { _id } = useParams();
  const [player, setPlayer] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8000/todo/${_id}`;
      const data = await axios.get(url);
      console.log(data);
      setPlayer(data.data.data.player);
    };
    fetchData();
  }, [_id]);

  return (
    <main className="text-white">
      {player.detail && (
        <div className="bg-[#3f3f3f] flex justify-evenly pt-7 px-36">
          <div className="flex flex-col justify-around w-1/3">
            <div>
              <div className="title-manager font-bold text-5xl mb-6">
                Player
              </div>
              <span className="text-3xl mr-4">{player.firstname}</span>
              <span className="text-4xl font-semibold">{player.lastname}</span>
            </div>
            <div className="w-1/2 text-3xl italic font-light">
              {player.detail[0].stated}
            </div>
          </div>
          <div className="w-1/3">
            <img src={player.detail[0].img} alt="" />
          </div>
        </div>
      )}
      {player.detail && (
        <div className="manager-info">
          <div className="border-b-4 border-y-[#ccc]">
            <p className="text-[gray] text-lg my-4">BIOGRAPHY</p>
            <p className="text-xl text-black my-4 normal-case">
              {player.detail[0].biography}
            </p>
          </div>
          <div className="text-black flex capitalize">
            <div className="detail-item">
              <div className="sub-detail-item">
                <p className="text-xl text-[gray] mt-4">POSITION</p>
                <p className="detail-item-posiotion">{player.position}</p>
              </div>
              <div className="sub-detail-item">
                <p className="text-xl text-[gray] mt-2">JOINED</p>
                <p className="text-2xl text-[#97212d] mt-5 font-bold">
                  {player.detail[0].join}
                </p>
              </div>
            </div>
            <div className="detail-item">
              <div className="sub-detail-item">
                <p className="text-xl text-[gray] mt-4">COUNTRY</p>
                <p className="detail-item-posiotion">
                  {player.detail[0].country}
                </p>
              </div>
            </div>
            <div className="detail-item">
              <div className="sub-detail-item">
                <p className="text-xl text-[gray] mt-4">DATE OF BIRTH</p>
                <p className="text-2xl text-[#97212d] mt-5 font-bold">
                  {player.detail[0].dofb}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Details;
