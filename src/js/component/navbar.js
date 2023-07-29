import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css"

export const Navbar = () => {
	return (
		<div className="nav__custom">
			<nav className="navbar navbar-dark mb-3" id="nav__custom">
				<Link to="/">
					<img
						className=" ms-4"
						style={{ width: "70px", height: "70px" }}
						src="https://pngimg.com/d/star_wars_logo_PNG34.png"
						alt="Star Wars logo"
					/>
				</Link>

				<div className="btn-group me-5">
					<button type="button" className="btn btn-warning">Your favorites</button>
					<button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
						<span className="visually-hidden">Toggle Dropdown</span>
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
