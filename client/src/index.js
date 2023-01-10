import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from "@material-ui/core/styles";
import App from './App';
import './styles.css';
import { Typography, AppBar, FormControl, Button, TextField, Container } from '@material-ui/core';

import { ContextProvider } from "./SocketContext";
// import {ContextProvider2 } from "./socketHelper";


ReactDOM.render(
	<ContextProvider>
		{/* <AppBar class='appBar'>
			<Typography variant='h6' align='center'>
				Powered by webRTC
			</Typography>
		</AppBar> */}

		{/* <ContextProvider2> */}
		<App />
		{/* </ContextProvider2> */}
	</ContextProvider>
, 

document.getElementById('root'));