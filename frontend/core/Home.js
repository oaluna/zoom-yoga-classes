import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { listPublished } from './../course/api-course'
import { listEnrolled, listCompleted } from './../enrollment/api-enrollment'
import Typography from '@mui/material/Typography'
import auth from './../auth/auth-helper'
import Courses from './../course/Courses'
import Enrollments from '../enrollment/Enrollments'



const useStyles = makeStyles(theme => ({
	spacing: new Array(12),
	card: {
		width: '90%',
		margin: 'auto',
		marginTop: 20,
		marginBottom: `12px`,
		padding: 20,
		backgroundColor: '#ffffff'
	},
	extraTop: {
		marginTop: `12px`
	},
	title: {
		padding: `3px 2.5px 3px`,
		color: '#455a64'
	},
	media: {
		minHeight: 400
	},
	gridList: {
		width: '100%',
		minHeight: 200,
		padding: '16px 0 10px'
	},
	tile: {
		textAlign: 'center'
	},
	image: {
		height: '100%'
	},
	tileBar: {
		backgroundColor: 'rgba(0, 0, 0, 0.72)',
		textAlign: 'left'
	},
	enrolledTitle: {
		color: '#efefef',
		marginBottom: 5
	},
	action: {
		margin: '0 10px'
	},
	enrolledCard: {
		backgroundColor: '#616161',
	},
	divider: {
		marginBottom: 16,
		backgroundColor: 'rgb(157, 157, 157)'
	},
	noTitle: {
		color: 'lightgrey',
		marginBottom: 12,
		marginLeft: 8
	}
}))

export default function Home() {
	const classes = useStyles()
	const jwt = auth.isAuthenticated()
	const [courses, setCourses] = useState([])
	const [enrolled, setEnrolled] = useState([])
	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal
		listEnrolled({ t: jwt.token }, signal).then((data) => {
			if (data.error) {
				console.log(data.error)
			} else {
				setEnrolled(data)
			}
		})
		return function cleanup() {
			abortController.abort()
		}
	}, [jwt.token])
	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal
		listPublished(signal).then((data) => {
			if (data.error) {
				console.log(data.error)
			} else {
				setCourses(data)
			}
		})
		return function cleanup() {
			abortController.abort()
		}
	}, [])
	return (<div className={classes.extraTop}>
		{auth.isAuthenticated().user && (
			<Card className={`${classes.card} ${classes.enrolledCard}`}>
				<Typography variant="h6" component="h2" className={classes.enrolledTitle}>
					Courses you are enrolled in
				</Typography>
				{enrolled.length != 0 ? (<Enrollments enrollments={enrolled} />)
					: (<Typography variant="body1" className={classes.noTitle}>No courses.</Typography>)
				}
			</Card>
		)}
		<Card className={classes.card}>
			<Typography variant="h5" component="h2">
				All Courses
			</Typography>
			{(courses.length != 0 && courses.length !== enrolled.length) ? (<Courses courses={courses} common={enrolled} />)
				: (<Typography variant="body1" className={classes.noTitle}>No new courses.</Typography>)
			}
		</Card>
	</div>
	)
}
