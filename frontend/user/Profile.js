import React, { useState, useEffect } from 'react'
import { createStyles } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Edit from '@mui/icons-material/Edit'
import Person from '@mui/icons-material/Person'
import Divider from '@mui/material/Divider'
import DeleteUser from './DeleteUser.js'
import auth from './../auth/auth-helper'
import { read } from './api-user.js'
import { Route, Link } from 'react-router-dom'


export default function Profile({ match }) {
	const classes = createStyles(theme => ({
		root: theme.mixins.gutters({
			maxWidth: 600,
			margin: 'auto',
			padding: theme.spacing(3),
			marginTop: theme.spacing(12)
		}),
		title: {
			marginTop: theme.spacing(3),
			color: theme.palette.protectedTitle
		}
	}))
	const [user, setUser] = useState({})
	const [redirectToSignin, setRedirectToSignin] = useState(false)
	const jwt = auth.isAuthenticated()

	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal

		read({
			userId: match.params.userId
		}, { t: jwt.token }, signal).then((data) => {
			if (data && data.error) {
				setRedirectToSignin(true)
			} else {
				setUser(data)
			}
		})

		return function cleanup() {
			abortController.abort()
		}

	}, [match.params.userId, jwt.token])

	if (redirectToSignin) {
		return <Route redirect='/signin' />
	}
	return (
		<Paper className={classes.root} elevation={4}>
			<Typography variant="h6" className={classes.title}>
				Profile
			</Typography>
			<List dense>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<Person />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={user.name} secondary={user.email} /> {
						auth.isAuthenticated().user && auth.isAuthenticated().user._id === user._id &&
						(<ListItemSecondaryAction>
							<Link to={"/user/edit/" + user._id}>
								<IconButton aria-label="Edit" color="primary">
									<Edit />
								</IconButton>
							</Link>
							<DeleteUser userId={user._id} />
						</ListItemSecondaryAction>)
					}
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemText primary={"Joined: " + (
						new Date(user.created)).toDateString()} />
				</ListItem>
			</List>
		</Paper>
	)
}