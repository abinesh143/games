"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <img src="/emogi1.webp" className="me-2" width={40} height={40}></img>
          <a className="navbar-brand fs-3 fw-bolder px-2" href="#">
            Smiley Games
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="py-4 fw-bold fs-2 text-center">Welcome to Smiley Games</div>
          <div className="d-flex justify-content-center py-4 sticky-bottom bg-white">
            <Link
              type="button"
              className="btn btn-pink-moon customWidth py-2 fs-4 fw-medium"
              href="https://play.google.com/store/apps/developer?id=SJS+Softwares"
            >
              Download our Application
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
