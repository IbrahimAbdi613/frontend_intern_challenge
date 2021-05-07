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
						<i class="far fa-circle" style={{
							position: 'absolute',
							top: "-20px",
							right: " -40px",
							fontSize: "80%",
							backgroundColor: "#ff6600",
						}}>
							<label style={{
								position: 'relative',
								right: "30px",
								color: "white",
								fontWeight: 500,
							}}>
								{user != null && user.Trash != undefined ? user.Trash.length : ""}
							</label>
						</i>
					</i>
				</div>
			</div>
		</div>
	);
};

export default SideBarItem;
