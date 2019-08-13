import React from 'react';

import './App.css';
import styled from 'styled-components';
import Stepper from './components/Stepper';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends React.Component {
	state = {
		openSidebar: false
	};
	render() {
		return (
			<AppWrapper className="App">
				<Header />
				<Sidebar className="col-lg-3 col-md-3 col-sm-12 sidebar" />
				<Stepper className="col-lg-9 col-md-9 col-sm-12 body" />
			</AppWrapper>
		);
	}
}

const AppWrapper = styled.div`
	/* @media (min-width: 768px) and (max-width: 2000px) {
		.sidebar {
			width: 30vw;
		}
		.body {
			float: left;
		}
	} */
`;

export default App;
