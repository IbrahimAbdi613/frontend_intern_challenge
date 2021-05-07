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
						height: "fit-content"
					}}>
						{(user != null && user[props.name] != undefined) &&
							<p style={{
								position: 'absolute',
								top: "-50px",
								right: " -23px",
								fontSize: "80%",
								backgroundColor: "#ff6600",
								color: "white",
								fontWeight: 500,
								borderRadius: "45px",
								padding: "2px 10px"
							}}>
							{user[props.name].length}
						</p>
						}
					</i>
				</div>
			</div>
		</div>
	);
};

export default SideBarItem;
