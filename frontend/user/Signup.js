import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Icon from '@mui/material/Icon'
import { createStyles } from '@mui/material/styles'
import { create } from './api-user.js'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Link } from 'react-router-dom'

export default function Signup() {
	const classes = createStyles(theme => ({
		card: {
			maxWidth: 600,
			margin: 'auto',
			textAlign: 'center',
			marginTop: theme.spacing(12),
			paddingBottom: theme.spacing(2)
		},
		error: {
			verticalAlign: 'middle'
		},
		title: {
			marginTop: theme.spacing(2),
			color: theme.palette.openTitle
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 300
		},
		submit: {
			margin: 'auto',
			marginBottom: theme.spacing(2)
		}
	}))
	const [values, setValues] = useState({
		name: '',
		password: '',
		email: '',
		open: false,
		error: ''
	})

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const clickSubmit = () => {
		const user = {
			name: values.name || undefined,
			email: values.email || undefined,
			password: values.password || undefined
		}
		create(user).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setValues({ ...values, error: '', open: true })
			}
		})
	}

	return (<div>
		<Card className={classes.card}>
			<CardContent>
				<Typography variant="h6" className={classes.title}>
					Sign Up
				</Typography>
				<TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal" /><br />
				<TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
				<TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal" />
				<br /> {
					values.error && (<Typography component="p" color="error">
						<Icon color="error" className={classes.error}>error</Icon>
						{values.error}</Typography>)
				}
			</CardContent>
			<CardActions>
				<Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
			</CardActions>
		</Card>
		<Dialog open={values.open} disableBackdropClick={true}>
			<DialogTitle>New Account</DialogTitle>
			<DialogContent>
				<DialogContentText>
					New account successfully created.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Link to="/signin">
					<Button color="primary" autoFocus="autoFocus" variant="contained">
						Sign In
					</Button>
				</Link>
			</DialogActions>
		</Dialog>
	</div>
	)
}