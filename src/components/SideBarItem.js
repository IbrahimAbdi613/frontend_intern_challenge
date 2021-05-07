import React from "react";
import "../stylesheets/SideBarItem.css";
import {useSelector} from "react-redux";

let SideBarItem = (props) => {
	const user = useSelector((state) => state.user);
	return (
		<div>
			<div className="SideBarItem">
				<label className="SideBarLabel">{props.name}</label>
				<div>
					<i className={props.icon} style={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "fit-content",
						height: "fit-content",
						margin: "0.3vw 0 0 1.5vw"
					}}>
						{(user != null && user[props.name] != undefined) &&
							<label style={{
								position: 'absolute',
							top: "-3.5vw",
							right: " -3.5vw",
								fontSize: "80%",
								backgroundColor: "#ff6600",
								color: "white",
							fontWeight: 500,
							padding: "2px 10px",
							borderRadius: "50px",
							width: "1px"

							}}>
							{user[props.name].length}
						</label>
						}
					</i>
				</div>
			</div>
		</div>
	);
};

export default SideBarItem;
