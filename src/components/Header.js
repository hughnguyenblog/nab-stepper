import React, { Component } from 'react';
import styled from 'styled-components';
import { FaBars, FaPlusCircle } from 'react-icons/fa';

export class Header extends Component {
	render() {
		return (
			<NavWrapper>
				<FaBars className="icon-sidebar" />
				<h1 className="title">Sample page title</h1>
				<FaPlusCircle className="icon-newTitle" />
				<button className="btnAdd">ADD NEW TITLE</button>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.div`
	background-color: white;
	height: 100%;
	display: flex;
	align-items: center;
	box-shadow: inset 0px -1px 0px #dddddd;
	.icon-sidebar {
		margin: 0 16px;
	}
	.icon-newTitle {
		margin-left: auto;
		margin-right: 16px;
	}
	.btnAdd {
		display: none;
	}
	@media (min-width: 768px) and (max-width: 2000px) {
		.icon-sidebar {
			display: none;
		}
		.title {
			margin-left: 2rem;
		}
		.btnAdd {
			display: block;
			margin-left: auto;
			background-color: #2196f3;
			margin-right: 2rem;
			line-height: 16px;
			color: white;
			font-family: "Roboto", sans-serif;
			text-align: center;
			padding: 1rem;
			font-size: 14px;
		}
		.icon-newTitle {
			display: none;
		}
	}
`;

export default Header;
