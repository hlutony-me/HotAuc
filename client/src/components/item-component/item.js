import React from "react";

import { useParams } from "react-router";

import { useEffect, useState } from "react";

import "./Items.css";

import axios from "axios";

const Item = () => {
  const { id } = useParams();

  console.log(id);

  const currentDateTime = Date().toLocaleString();

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        //Set request header

        const config = {
          headers: {
            "Content-Type": "Application/json",
          },
        };

        const res = await axios.get(
          `http://localhost:5000/api/item/${id}`,

          config
        );

        console.log(res);

        setData(res.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, []);

  return (
    /*{ <div className="cards">
                 {" "}
      <div className="card">
                       {" "}
        <div className="card-body">
                              <p>Title: {!loading && data.title}</p>           
                  <h2>{id}</h2>               {" "}
        </div>
                   {" "}
      </div>
             {" "}
    </div> 
}*/

    <div className="items">
      <div className="home">
        <h1>{!loading && data.title}</h1>
        <div className="stuff">
          <img
            class="image"
            src={!loading && data.images[0].uri}
            alt="Random Img"
          />
          <p class="text">
            Current Price: ${!loading && data.startingPrice}
          </p>
          <p class="text">End Time: {!loading && data.endTime}</p>
          <div class="bid">
            Bidding Price : <input class="txtPrice" placeholder="Price"></input>
            <button class="btn btn-primary">Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
