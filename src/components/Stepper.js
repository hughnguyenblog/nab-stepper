import React, { Component } from 'react';
import styled from 'styled-components';

const initVar = {
	primaryColor: '#2196F3',
	boxShadow: '0 0 6px #2196F3',
	backgroundHover: 'rgba(0, 0, 0, 0.1)',
	primaryLight: '#BBDEFB'
};

export class Stepper extends Component {
	state = {
		contentIsActive: '',
		data: [
			{
				id: 21231,
				lable: 'Supplier',
				isVisited: true,
				isActive: true,
				content:
					'Super Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices ultricies sodales. Nullam consectetur luctus ligula, at iaculis ante cursus at. Aenean vitae nibh ante. Etiam metus ligula, mattis vitae malesuada eget, molestie feugiat nibh. Donec imperdiet ut urna quis condimentum. Nunc eget ullamcorper dolor. Praesent mollis quam id orci placerat malesuada. Maecenas imperdiet ac nibh vel blandit. Mauris dictum dapibus ligula a blandit. Sed gravida scelerisque venenatis. Quisque et metus nisi. Maecenas quis malesuada nunc. Donec diam erat, finibus volutpat pretium et, condimentum nec est. Sed molestie in eros non egestas. Maecenas lacus tortor, venenatis vel molestie in, fringilla at neque. Curabitur tempus condimentum magna, non porta enim finibus quis. Vivamus tempus dui vel justo ornare feugiat. Vivamus '
			},
			{
				id: 2443123,
				lable: 'Basic Information',
				isVisited: false,
				content:
					'Basic Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices ultricies sodales. Nullam consectetur luctus ligula, at iaculis ante cursus at. Aenean vitae nibh ante. Etiam metus ligula, mattis vitae malesuada eget, molestie feugiat nibh. Donec imperdiet ut urna quis condimentum. Nunc eget ullamcorper dolor. Praesent mollis quam id orci placerat malesuada. Maecenas imperdiet ac nibh vel blandit. Mauris dictum dapibus ligula a blandit. Sed gravida scelerisque venenatis. Quisque et metus nisi. Maecenas quis malesuada nunc. Donec diam erat, finibus volutpat pretium et, condimentum nec est. Sed molestie in eros non egestas. Maecenas lacus tortor, venenatis vel molestie in, fringilla at neque. Curabitur tempus condimentum magna, non porta enim finibus quis. Vivamus tempus dui vel justo ornare feugiat. Vivamus '
			},
			{
				id: 3545234,
				lable: 'Language',
				isVisited: false,
				content:
					'Language Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices ultricies sodales. Nullam consectetur luctus ligula, at iaculis ante cursus at. Aenean vitae nibh ante. Etiam metus ligula, mattis vitae malesuada eget, molestie feugiat nibh. Donec imperdiet ut urna quis condimentum. Nunc eget ullamcorper dolor. Praesent mollis quam id orci placerat malesuada. Maecenas imperdiet ac nibh vel blandit. Mauris dictum dapibus ligula a blandit. Sed gravida scelerisque venenatis. Quisque et metus nisi. Maecenas quis malesuada nunc. Donec diam erat, finibus volutpat pretium et, condimentum nec est. Sed molestie in eros non egestas. Maecenas lacus tortor, venenatis vel molestie in, fringilla at neque. Curabitur tempus condimentum magna, non porta enim finibus quis. Vivamus tempus dui vel justo ornare feugiat. Vivamus '
			},
			{
				id: 423332,
				lable: 'Sample',
				isVisited: false,
				content:
					'Sample Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices ultricies sodales. Nullam consectetur luctus ligula, at iaculis ante cursus at. Aenean vitae nibh ante. Etiam metus ligula, mattis vitae malesuada eget, molestie feugiat nibh. Donec imperdiet ut urna quis condimentum. Nunc eget ullamcorper dolor. Praesent mollis quam id orci placerat malesuada. Maecenas imperdiet ac nibh vel blandit. Mauris dictum dapibus ligula a blandit. Sed gravida scelerisque venenatis. Quisque et metus nisi. Maecenas quis malesuada nunc. Donec diam erat, finibus volutpat pretium et, condimentum nec est. Sed molestie in eros non egestas. Maecenas lacus tortor, venenatis vel molestie in, fringilla at neque. Curabitur tempus condimentum magna, non porta enim finibus quis. Vivamus tempus dui vel justo ornare feugiat. Vivamus '
			}
		]
	};
	selectItem = (indexSelected) => {
		const data = this.state.data;
		const lengtData = data.length;
		// Set visited and unvisited
		if (data[indexSelected].isVisited === false) {
			for (let i = 1; i <= indexSelected; i++) {
				data[i].isVisited = true;
			}
		} else if (data[indexSelected].isVisited === true) {
			for (let i = lengtData - 1; i > indexSelected; i--) {
				data[i].isVisited = false;
			}
		}
		// Set Active
		for (let i = 0; i < lengtData; i++) {
			data[i].isActive = false;
		}
		data[indexSelected].isActive = true;
		this.setState({ contentIsActive: data[indexSelected].content });
	};
	render() {
		return (
			<BodyWrapper>
				<StepperWrapper>
					<ul>
						{this.state.data.map((item, index) => {
							return (
								<StepWrapper
									id={item.id}
									key={item.id}
									isActive={item.isActive}
									isVisited={item.isVisited}
									onClick={() => this.selectItem(index)}
								>
									{item.lable}
								</StepWrapper>
							);
						})}
					</ul>
				</StepperWrapper>
				<p>{this.state.contentIsActive === '' ? this.state.data[0].content : this.state.contentIsActive}</p>
			</BodyWrapper>
		);
	}
}

const BodyWrapper = styled.section`width: 100%;`;

const StepperWrapper = styled.div`
	width: 100%;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	ul {
		list-style-type: none;
		counter-reset: number;
		width: 100%;
	}
`;

const StepWrapper = styled.li`
	padding: 16px 12px;
	position: relative;
	font-weight: ${(props) => (props.isActive ? 'bold' : '')};
	/* Draw circle + number */
	::before {
		content: counter(number);
		counter-increment: number;
		width: 20px;
		height: 20px;
		line-height: 20px;
		display: inline-block;
		text-align: center;
		border-radius: 100%;
		margin-right: 12px;
		border: 2px ${initVar.primaryLight} solid;
		background-color: ${(props) => (props.isVisited ? initVar.primaryColor : 'ghostwhite')};
		color: ${(props) => (props.isVisited ? 'white' : initVar.primaryColor)};
		box-shadow: ${(props) => (props.isActive ? initVar.boxShadow : '')};
	}
	/* Draw line */
	::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 3px;
		background-color: ${(props) => (props.isVisited ? initVar.primaryColor : initVar.primaryLight)};
		left: 22px;
		top: -20px;
		z-index: -1;
	}
	:first-child::after {
		content: none;
	}
	:hover {
		background: ${initVar.backgroundHover};
		cursor: pointer;
	}

	@media (min-width: 768px) and (max-width: 2000px) {
		display: inline-block;
		text-align: center;
		width: calc(80% / 4);
		::before {
			display: block;
			margin: 0 auto;
		}
		::after {
			width: 100%;
			height: 3px;
			top: 25px;
			left: -50%;
		}
	}
`;

export default Stepper;
