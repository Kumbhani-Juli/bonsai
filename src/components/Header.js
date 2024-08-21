import React, { useState } from "react";
import "../assets/css/Header.css";
import bonsaiLogo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faFileInvoiceDollar,
	faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<a href="/bonsai">
						<img
							src={bonsaiLogo}
							className="img-fluid header-logo"
							alt="Logo"
						/>
					</a>
				</div>
				<div className="menu_bar">
					<ul>
						<li>
							<a href="#product">
								Product <i class="fa-solid fa-chevron-down"></i>
							</a>

							<div className="dropdown_menu">
								<ul>
									<li>
										<a href="#">Bonsai Workflow </a>
										<div className="dropdown_menu-1">
											<p>
												Look professional, win more clients and manage your
												business from one place
											</p>
										</div>
									</li>

									<li>
										<a href="#">Bonsai Tax</a>
										<div className="dropdown_menu-2">
											<p>
												Track expenses, maximize tax write- offs, and estimate
												taxes without the headache
											</p>
										</div>
									</li>

									<li>
										<a href="#">Bonsai Cash</a>
										<div className="dropdown_menu-3">
											<p>
												Bonsai's all-in-one financial hub: No fees and lighting
												fast pauouts
											</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">
								Templetes <i className="fa-solid fa-chevron-down"></i>
							</a>
							<div className="dropdown_list">
								<ul>
									<li>
										<a href="#"></a>
										<div className="dropdown_list-1">
											<h3>Featured Contract Templates</h3>
											<h4>Free Contract Maker</h4>
											<h4>Social Media Management Contract Templates</h4>
											<h4>Graphic Design Contract Templates</h4>
											<h4>Digital Marketing Contract Templates</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faFileLines} />
											Proposal Templates
										</a>
										<div className="dropdown_list-2">
											<h3>Featured Proposal Templates</h3>
											<h4>Graphic Design Proposal Template</h4>
											<h4>Business Proposal Template</h4>
											<h4>Brand Ambassador Proposal Template</h4>
											<h4>Data Entry Proposal Letter Template</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faFileInvoiceDollar} />
											Invoice Templates
										</a>
										<div className="dropdown_list-3">
											<h3>Featured Invoice Templates</h3>
											<h4>Social Media Invoice Template</h4>
											<h4>Contrctor Invoice Template</h4>
											<h4>Web Design Invoice Template</h4>
											<h4>Influencer Invoice Template</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faFileLines} />
											Agreement Templates
										</a>
										<div className="dropdown_list-4">
											<h3>Featured Agreement Templates</h3>
											<h4>Influencer Agreement Template</h4>
											<h4>Influencer Collaboration Agreement Template</h4>
											<h4>Monthly Retainer Agreement Template</h4>
											<h4>Writer Agreement Template</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faFileLines} />
											Quote Templates
										</a>
										<div className="dropdown_list-5">
											<h3>Featured Quote Templates</h3>
											<h4>Web Design Quotation Template</h4>
											<h4>Interior Design Quotation Template</h4>
											<h4>Digital Marketing Quotation Template</h4>
											<h4>Video Production Quotation Template</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faClock} />
											Scope of work Templates
										</a>
										<div className="dropdown_list-6">
											<h3>Featured Scope of Work Templates</h3>
											<h4>Website Development Scope of Work Template</h4>
											<h4>Digital Marketing Scope of Work Template</h4>
											<h4>Consultant Scope of Work Template</h4>
											<h4>Interior Design Scope of Work Template</h4>
										</div>
									</li>

									<li>
										<a href="#">
											<FontAwesomeIcon icon={faFileLines} />
											Brief Templates
										</a>
										<div className="dropdown_list-7">
											<h3>Featured Brief Templates</h3>
											<h4>Design Brief Template</h4>
											<h4>Architecture Design Brief</h4>
											<h4>Fashion Design Brief</h4>
											<h4>Creative Brief Template</h4>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Reviews</a>
						</li>
					</ul>
				</div>
				<div className="header-buttons">
					<a href="/signin" className="btn login">
						Login
					</a>
					<a href="/signup" className="btn start-free">
						StartFree
					</a>
				</div>
				{/* <button classNameName="menu-toggle" onClick={toggleMenu}>
					☰
				</button> */}
			</div>
		</header>
	);
};

export default Header;
