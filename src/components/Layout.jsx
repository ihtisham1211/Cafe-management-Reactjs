import React from 'react';
import TableButtonContainer from '../containers/TableButtonContainer.js';

const Layout = () => {
	var style = {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		flexWrap: "wrap",
		width: 640,
		height: 480,
		backgroundColor: "#000"
	};

	return(
	<div style={style}>
      <TableButtonContainer id={0} />
      <TableButtonContainer id={1} />
      <TableButtonContainer id={2} />
      <TableButtonContainer id={3} />
      <TableButtonContainer id={4} />
      <TableButtonContainer id={5} />

      <TableButtonContainer id={6} />
      <TableButtonContainer id={7} />
      <TableButtonContainer id={8} />
      <TableButtonContainer id={9} />

      <TableButtonContainer id={10} />
      <TableButtonContainer id={11} />
      <TableButtonContainer id={12} />
      <TableButtonContainer id={13} />
      <TableButtonContainer id={14} />
      <TableButtonContainer id={15} />
    </div>
	);
}

export default Layout;