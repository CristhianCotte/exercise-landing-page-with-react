import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<strong>Start Boostratp</strong>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse  justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								About
							</a>
							<a className="nav-link" href="#">
								Services
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			<div className="container">
				<div className="row">
					<div className="col-12 seccion1 p-5 my-5">
						<h1>A Warn Welcome!</h1>
						<p>
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer
							took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five
							centuries, but also the leap into electronic
							typesetting, remaining essentially un
						</p>
						<button type="button" className="btn btn-primary">
							Call to action!
						</button>
					</div>
					<div className="col-lg-3 col-12 mt-4">
						<div className="card ">
							<img
								src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">
									Card title
								</h5>
								<p className="card-text text-center">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
							</div>
							<div className="card-body text-center border-top">
								<a href="#" className="btn btn-primary ">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-12 mt-4">
						<div className="card ">
							<img
								src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">
									Card title
								</h5>
								<p className="card-text text-center">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
							</div>
							<div className="card-body text-center border-top">
								<a href="#" className="btn btn-primary ">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-12 mt-4">
						<div className="card ">
							<img
								src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">
									Card title
								</h5>
								<p className="card-text text-center">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
							</div>
							<div className="card-body text-center border-top">
								<a href="#" className="btn btn-primary ">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-12 mt-4">
						<div className="card ">
							<img
								src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">
									Card title
								</h5>
								<p className="card-text text-center">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
							</div>
							<div className="card-body text-center border-top">
								<a href="#" className="btn btn-primary ">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-dark d-flex justify-content-center text-white py-3 mt-5">
				<strong>
					<p>Copyright © Your Website 2018</p>
				</strong>
			</div>
		</>
	);
};

export default Home;
