import "./stylesheets/App.css";
import React from "react";
import {useEffect, useState} from 'react'
import SearchBox from "./components/SearchBox";
import SideBar from "./components/SideBar";
import SignIn from './components/SignIn'
import UserMovies from './components/UserMovies'
import Modal from './components/Modal'
import {useSelector} from "react-redux";
import {motion} from 'framer-motion'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

let App = () => {
	const user = useSelector((state) => state.user);
	return (
		<div>
			<Router>
				<motion.div
					className="TitleContainer"
					initial={{y: -250}}
					animate={{y: 0}}
				>
					<label className="HeaderTitle">Shoppies</label>
					<span role="img" aria-label="Clapper Board">🎬</span>
					<span role="img" aria-label="Popcorn">🍿</span>
				</motion.div>
				{
					(user || localStorage.user) ? (
						<div>
							{(user.Nominations.length >= 5) && <Modal />}
							<div className="flexbox-container">
								<SideBar className="flexbox-container-1" user={user} />
								<Switch>
									<Route path="/" exact component={SearchBox} />
									<Route
										path="/Nominations"
										exact
										component={
											() => {
												return (
													< UserMovies
														ListType="Nominations"
														isNominated={true}
														style={{gridTemplateColumns: "3fr 10fr", margin: "5%"}}
													/>
												)
											}
										}
									/>
									<Route
										path="/Trash"
										exact
										component={
											() => {
												return (
													<UserMovies
														ListType="Trash"
														isNominated={false}
														style={{gridTemplateColumns: "3fr 10fr", margin: "5%"}}
													/>
												)
											}
										}
									/>
								</Switch>
							</div>
						</div>

					) : <SignIn />
				}
			</Router>
		</div >
	);
};

export default App;
