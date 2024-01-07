"use client";

import { useState, useEffect } from "react";
import game from "../../../games.json";
import { useParams } from "next/navigation";
import Loader from "@/components/Loading";

const gameCategory = () => {
  const [mainGame, setMainGame] = useState([]);
  const param = useParams();

  const initializeGames = (routeId) => {
    if (routeId == "Sports%20%26%20Racing") {
      routeId = "Sports & Racing";
    }
    if (routeId == "Puzzle%20%26%20Logic") {
      routeId = "Puzzle & Logic";
    }
    if (routeId) {
      const groupCategory = game.games.filter((g) => {
        if (g.categories.en[0] == routeId) {
          return g;
        }
      });

      const maxPlayers = groupCategory.sort((a, b) => {
        return b.gamePlays - a.gamePlays;
      });

      setMainGame(maxPlayers);
    }
  };

  useEffect(() => {
    if (param.categoryId) {
      initializeGames(param.categoryId);
    }
  }, [param.categoryId]);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <div className="container bg-light">
        <h2 className="text-center pt-2 fw-bold text-uppercase">
          {param.categoryId == "Sports%20%26%20Racing"
            ? "Sports & Racing"
            : param.categoryId == "Puzzle%20%26%20Logic"
            ? "Puzzle & Logic"
            : param.categoryId}
        </h2>
        <div className="row mb-2 px-1">
          {mainGame.length ? (
            mainGame.map((g, index) => {
              return (
                <div
                  key={index}
                  className="col-6 col-md-3 d-flex justify-content-center p-1"
                >
                  <div
                    className={`shadow mt-3 rounded bg-white customWidth d-flex flex-column`}
                  >
                    <div className="pt-2 fw-bolder text-center rounded-bottom">
                      {g.name.en}
                    </div>
                    <img src={g.assets.cover} className="p-2 img-fluid"></img>
                    <div className="d-flex flex-column justify-content-center pt-2">
                      <a
                        className={`btn zoom-in-out-box mx-3 btn-dark-moon text-white `}
                        href={g.url}
                        target="blank"
                      >
                        Start Game
                      </a>

                      <div className="d-flex justify-content-center my-2">
                        <img src="./online.png" width={15} height={15}></img>
                        <div className="text-success fw-bold font-12 px-1">
                          {Math.floor(g.gamePlays / 10000)} Users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default gameCategory;
