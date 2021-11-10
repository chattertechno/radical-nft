import React from "react";

class AppFooter extends React.Component {
	render() {
		return (
			<footer className="app-footer">
				<a
					href="https://t.me/BrainiacChess_Announcement"
					target="_blank"
					rel="noopener noreferrer"
				>
					Telegram Announcements
				</a>
				<br />
				<a href="mailto:contact@brainiacchess.network">
					contact@brainiacchess.network
				</a>
			</footer>
		);
	}
}

export default AppFooter;
