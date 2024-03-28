import game from "../../../games.json";
import Loader from "@/components/Loading";

export async function generateMetadata({ params }) {
  const currentGame = game.games.filter((game) => {
    return game.code === params.slug;
  });

  return {
    title: currentGame[0].name.en || "Smiley Games",
    description:
      currentGame[0].description.en ||
      "Immerse yourself in the thrilling world of Online Games, the ultimate online gaming experience. Engage in epic battles, embark on challenging quests, and unleash your strategic prowess in this dynamic multiplayer game. With stunning graphics and seamless gameplay, Online Games transports you to a virtual realm where excitement knows no bounds",
    keywords: currentGame[0].tags.en || ["online", "games"],
    openGraph: {
      images: currentGame[0].assets.brick,
    },
  };
}

const UniqueGames = ({ params }) => {
  const gameJson = game.games;

  const currentGame = gameJson.filter((game) => {
    return game.code === params.slug;
  });
  const mrGame = currentGame.length ? currentGame[0] : [];

  const text = `Play this amazing game with me`;
  const newLine = "\n";
  const shareText = encodeURIComponent(
    `Hai,${newLine}*${
      mrGame.name.en || "Smiley"
    } Game*${newLine}${text}${newLine}${newLine}https://games.smileyshopy.in/game/${
      mrGame.code
    }`
  );

  return (
    <main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      {mrGame ? (
        <div className="d-flex justify-content-center mt-sm-5 mt-1">
          <div className="w-sm-50 mx-auto shadow-lg p-3">
            <a href={mrGame.url} target="_blank">
              <img
                src={mrGame.assets.cover}
                class="rounded img-fluid cursor"
                alt="games"
              />
            </a>
            <div class="mt-3">
              <h5 class="fs-3">{mrGame.name.en}</h5>
              <p class="">{mrGame.description.en}</p>
              <div className="d-flex flex-sm-row flex-column">
                <a
                  href={mrGame.url}
                  target="_blank"
                  class="btn btn-orange-moon px-5"
                >
                  Play Game
                </a>
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  class="btn btn-green-moon my-2 px-5"
                >
                  Share Game
                </a>
                <div className="d-flex justify-content-center align-items-center my-2 mx-5">
                  <img src="/online.png" width={20} height={20}></img>
                  <div className="text-success fw-bold font-6 px-1">
                    {Math.floor(mrGame.gamePlays)} Users
                  </div>
                </div>
              </div>
              {/* <div className="mt-5">{mrGame.assets.square}</div> */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </main>
  );
};

export default UniqueGames;
