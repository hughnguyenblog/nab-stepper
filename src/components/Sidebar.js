import React, { Component } from 'react';
import styled from 'styled-components';

export class Sidebar extends Component {
	render() {
		return (
			<SidebarWrapper>
				<ul className="listSidebar">
					<li>Overview</li>
					<li>Information</li>
					<li>Chapter</li>
				</ul>
			</SidebarWrapper>
		);
	}
}

const SidebarWrapper = styled.div`
	background-color: ghostwhite;

	.listSidebar {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
		}
	}
	@media (min-width: 768px) and (max-width: 2000px) {
	}
`;

export default Sidebar;
