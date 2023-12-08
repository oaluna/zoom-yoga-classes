import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { createStyles } from '@mui/material/styles';
import auth from './auth-helper.js';
import { useNavigate } from 'react-router-dom';
import { signin } from './api-auth.js';

const Signin = (props) => {
	const navigate = useNavigate();

	const classes = createStyles((theme) => ({
		card: {
			maxWidth: 600,
			margin: 'auto',
			textAlign: 'center',
			marginTop: theme.spacing(12),
			paddingBottom: theme.spacing(2),
		},
		error: {
			verticalAlign: 'middle',
		},
		title: {
			marginTop: theme.spacing(2),
			color: theme.palette.openTitle,
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 300,
		},
		submit: {
			margin: 'auto',
			marginBottom: theme.spacing(2),
		},
	}));

	const [values, setValues] = useState({
		email: '',
		password: '',
		error: '',
		redirectToReferrer: false,
	});

	const clickSubmit = () => {
		const user = {
			email: values.email || undefined,
			password: values.password || undefined,
		};

		signin(user).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				auth.authenticate(data, () => {
					setValues({ ...values, error: '', redirectToReferrer: true });
					navigate('/');
				});
			}
		});
	};

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant="h6" className={classes.title}>
					Sign In
				</Typography>
				<TextField
					id="email"
					type="email"
					label="Email"
					className={classes.textField}
					value={values.email}
					onChange={handleChange('email')}
					margin="normal"
				/>
				<br />
				<TextField
					id="password"
					type="password"
					label="Password"
					className={classes.textField}
					value={values.password}
					onChange={handleChange('password')}
					margin="normal"
				/>
				<br />
				{values.error && (
					<Typography component="p" color="error">
						<Icon color="error" className={classes.error}>
							error
						</Icon>
						{values.error}
					</Typography>
				)}
			</CardContent>
			<CardActions>
				<Button
					color="primary"
					variant="contained"
					onClick={clickSubmit}
					className={classes.submit}
				>
					Submit
				</Button>
			</CardActions>
		</Card>
	);
};

export default Signin;
