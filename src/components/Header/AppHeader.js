import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const SUBNAV = {
	HOME: 0,
	SOCIAL: 1,
};

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			activeSubnavId: null,
		};
	}

	componentDidMount() {
		this.setState({
			appHeader: document.querySelector("#app-header"),
		});
	}

	handleToggle(state) {
		const { appHeader } = this.state;

		if (state) {
			appHeader.classList.add("open");
		} else {
			appHeader.classList.remove("open");
		}

		this.setState({
			open: state,
		});
	}

	setActiveSubnav(nav) {
		nav = this.state.activeSubnav === nav ? null : nav;
		this.setState({
			activeSubnav: nav,
		});
	}

	render() {
		const { open, activeSubnav } = this.state;

		return (
			<header className={`app-header`} id="app-header">
				<div className="container mx-auto">
					<div className="app-header__brand-logo-container">
						<img
							className="app-header__brand-logo-img"
						/>
					</div>

					<input
						type="checkbox"
						id="app-header__nav-toggle"
						className="app-header__nav-toggle"
						checked={open}
						onChange={(e) => {
							this.handleToggle(!open);
						}}
					/>

					<nav className={`app-header__nav${open ? " open" : ""}`}>
						<ul>
							<li>
								<span
									className="app-header__nav-link"
									to="/"
									onClick={() => {
										this.setActiveSubnav(SUBNAV.HOME);
									}}
								>
									Home
									<nav
										className={`app-header__subnav${
											activeSubnav === SUBNAV.HOME ? " open" : ""
										}`}
										onClick={() => {
											this.handleToggle(false);
										}}
									>
										<ul>
											<li>
												<a
													className="app-header__nav-link"
													href="/#about-section"
												>
													About
												</a>
											</li>
											{/* <li>
                        <NavLink className="app-header__nav-link" to="/airdrop">
                          Airdrop
                        </NavLink>
                      </li> */}
					  						<li>
												<a
													className="app-header__nav-link"
													href="/#roadmap-section"
												>
													Roadmap
												</a>
											</li>
											<li>
												<a
													className="app-header__nav-link"
													href="/#team-section"
												>
													Team
												</a>
											</li>
											<li>
												<a
													className="app-header__nav-link"
													href="https://opacity.io/share#handle=e1804b0775167e20a047ed67d855ede03b864db5eda001f466a0793e120cea1017db85db601392d2dae1f5e5fe005a7dada3e73450a8b56d40081222a51f1d46"
													target="_blank"
													rel="noopener noreferrer"
												>
													White Paper
												</a>
											</li>
											<li>
												<NavLink className="app-header__nav-link" to="/faq">
													FAQ
												</NavLink>
											</li>
										</ul>
									</nav>
								</span>
							</li>

							<li>
								<span
									className="app-header__nav-link"
									to="/"
									onClick={() => {
										this.setActiveSubnav(SUBNAV.SOCIAL);
									}}
								>
									Social
									<nav
										className={`app-header__subnav${
											activeSubnav === SUBNAV.SOCIAL ? " open" : ""
										}`}
										onClick={() => {
											this.handleToggle(false);
										}}
									>
										<ul>
											<li>
												<a
													className="app-header__nav-link"
													href="/#news-section"
												>
													News
												</a>
											</li>
											<li>
												<NavLink className="app-header__nav-link" to="/">
													Ecosystem
												</NavLink>
											</li>
										</ul>
									</nav>
								</span>
							</li>

							<li
								onClick={() => {
									this.handleToggle(false);
								}}
							>
								<NavLink className="app-header__nav-link" to="/dapps">
									Dapps
								</NavLink>
							</li>
							<li
								onClick={() => {
									this.handleToggle(false);
								}}
							>
								<NavLink className="app-header__nav-link" to="/trade">
									Trade Chess
								</NavLink>
							</li>
						</ul>

						<ul
							onClick={() => {
								this.handleToggle(false);
							}}
						>
							{this.props.currentUser ? (
								<li className="app-header__account">
									{this.props.currentUser.Username}
								</li>
							) : (
								<>
									<li>
										<NavLink className="app-header__nav-link" to="/login">
											Login
										</NavLink>
									</li>
									<li>
										<NavLink className="app-header__nav-link" to="/signup">
											Signup
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</nav>
					<label
						htmlFor="app-header__nav-toggle"
						className="app-header__nav-toggle-lable"
					>
						<span
							className={`app-header__nav-toggle-icon${open ? " open" : ""}`}
						></span>
					</label>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
