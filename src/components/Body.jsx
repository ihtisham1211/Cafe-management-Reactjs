import React from 'react';
import DetailsContainer from '../containers/DetailsContainer.js';
import Layout from './Layout.jsx';
import Menu from './Menu.jsx';

const Body = () => {
		var style = {
			display: "flex",
			flex: 1
		}

	return(
		<div style={style} class="container justify-content-center	">
			<DetailsContainer />
			<br/>
			<Layout />
			<Menu />
		</div>
	);
}

export default Body;