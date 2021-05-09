import React from "react";
import "../stylesheets/SideBarItem.css";
import {useSelector} from "react-redux";
import {motion} from 'framer-motion'

let SideBarItem = (props) => {
	const user = useSelector((state) => state.user);
	return (
		<div>
			<motion.div
				className="SideBarItem"
				whileHover={{scale: 1.1}}

			>
				<label className="SideBarLabel">{props.name}
				</label>
				<div style={{
					width: "fit-content",
					height: 'fit-content',
					position: "absolute",
					left: "13vw",
					top: "2vw",
				}}>
					<i className={props.icon} style={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "fit-content",
						height: "fit-content",
						margin: "0",
						color: props.color
					}}>
						{
							(user != null && user[props.name] != undefined) &&
							<label className="sideBarItemLabel">{user[props.name].length}</label>
						}
					</i>
				</div>
			</motion.div>
		</div>
	);
};

export default SideBarItem;
