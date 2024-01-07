"use client";

import Link from "next/link";

const Navbar = () => {
  const gameConfig = [
    {
      name: "Play Arcade Games",
      buttonClass: "btn-green-moon",
      slug: "Arcade",
    },
    {
      name: "Play Action Games",
      buttonClass: "btn-dark-moon",
      slug: "Action",
    },
    {
      name: "Sports and Racing",
      buttonClass: "btn-funky-moon",
      slug: "Sports & Racing",
    },
    {
      name: "Play Strategy Games",
      buttonClass: "btn-purple-moon",
      slug: "Strategy",
    },
    {
      name: "Puzzle and Logic",
      buttonClass: "btn-cool-blues",
      slug: "Puzzle & Logic",
    },
    {
      name: "Play Adventure Games",
      buttonClass: "btn-orange-moon",
      slug: "Adventure",
    },
  ];

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link href="/" className="d-flex justify-content-center no-underline">
          <img
            src="/emogi1.webp"
            className="me-2"
            width={40}
            height={40}
            alt="Emoji"
          ></img>
          <div className="navbar-brand fs-3 fw-bolder px-2" href="#">
            Smiley Games
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel" className="fs-2 fw-bold">
              Categories
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <Link href="/" className="no-underline">
              <h3 className="p-3 bg-light fw-bold rounded" data-bs-dismiss="offcanvas">
               Home
              </h3>
            </Link>
            {gameConfig.map((cat, index) => (
              <Link
                href={`/category/${cat.slug}`}
                key={`category-${index}`}
                className="no-underline"
              >
                <h3
                  className="p-3 bg-light rounded"
                  data-bs-dismiss="offcanvas"
                >
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
