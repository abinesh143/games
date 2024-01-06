import { useState, useEffect } from "react";
import game from "../games.json";
import Link from "next/link";
import Loader from "./Loading";

const GameSection = (props) => {
  const [mainGame, setMainGame] = useState([]);

  const initializeGames = () => {
    if (props.data.slug) {
      const groupCategory = game.games.filter((g) => {
        if (g.categories.en[0] == props.data.slug) {
          return g;
        }
      });

      const maxPlayers = groupCategory.sort((a, b) => {
        return b.gamePlays - a.gamePlays;
      });

      const slicedGames = maxPlayers.slice(0, 4);
      setMainGame(slicedGames);
    }
  };

  const mostPlayedGames = () => {
    const filteredGames = game.games.filter((g) => {
      return g.gamePlays > 1000000;
    });
    const maxPlayers = filteredGames.sort((a, b) => {
      return b.gamePlays - a.gamePlays;
    });
    setMainGame(maxPlayers);
  };

  useEffect(() => {
    // initializeGames();
    mostPlayedGames();
  }, []);
  return (
    <div>
      <div className={`d-flex justify-content-center px-2 py-3 bg-light`}>
        <img src="./coin.png" className="p-2" alt="coin"></img>
        {/* <div className="fw-bold fs-1 text-dark">{props.data.name}</div> */}
        <div className="fw-bold fs-1 text-dark">Most Played</div>
      </div>
      <div className="container bg-light">
        <div className="row mb-2 px-1">
          {mainGame.length ? (
            mainGame.map((g, i) => {
              return (
                <div
                  key={i}
                  className="col-6 col-md-3 d-flex justify-content-center p-1"
                >
                  <div
                    className={`shadow mt-3 rounded bg-white customWidth d-flex flex-column`}
                  >
                    <div className="pt-2 fw-bolder text-center rounded-bottom">
                      {g.name.en}
                    </div>
                    <img src={g.assets.cover} className="p-2 img-fluid" alt={g.name.en}></img>
                    <div className="d-flex flex-column justify-content-center pt-2">
                      <a
                        className={`btn zoom-in-out-box mx-3 text-white ${props.data.buttonClass}`}
                        href={g.url}
                        target="blank"
                      >
                        Start Game
                      </a>

                      <div className="d-flex justify-content-center my-2">
                        <img src="./online.png" width={15} height={15} alt="online"></img>
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
            <div style={{height: 'calc(100vh - 408px)'}}>
              <Loader />
            </div>
          )}
        </div>
        {/* <div className="d-flex justify-content-center py-3">
          <Link
            href={`/${props.data.slug}`}
            className={`btn mx-3 w-75 text-white ${props.data.buttonClass}`}
          >
            View More
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default GameSection;
