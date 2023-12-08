import React, { useState, useEffect } from 'react'
import { createStyles } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import CompletedIcon from '@mui/icons-material/VerifiedUser'
import InProgressIcon from '@mui/icons-material/DonutLarge'
import { Link } from 'react-router-dom'

export default function Enrollments(props) {
	const classes = createStyles(theme => ({
		title: {
			padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
			color: theme.palette.openTitle
		},
		media: {
			minHeight: 400
		},
		container: {
			minWidth: '100%',
			paddingBottom: '14px'
		},
		gridList: {
			width: '100%',
			minHeight: 100,
			padding: '12px 0 10px'
		},
		tile: {
			textAlign: 'center'
		},
		image: {
			height: '100%'
		},
		tileBar: {
			backgroundColor: 'rgba(0, 0, 0, 0.85)',
			textAlign: 'left'
		},
		tileTitle: {
			fontSize: '1.1em',
			marginBottom: '5px',
			color: '#fffde7',
			display: 'block'
		},
		action: {
			margin: '0 10px'
		},
		progress: {
			color: '#b4f8b4'
		}
	}))
	return (
		<div>
			<Grid items cellHeight={120} className={classes.gridList} cols={4}>
				{props.enrollments.map((course, i) => (
					<Grid item key={i} className={classes.tile}>
						<Link to={"/learn/" + course._id}><img className={classes.image} src={'/api/courses/photo/' + course.course._id} alt={course.course.name} /></Link>
						<Grid items className={classes.tileBar}
							title={<Link to={"/learn/" + course._id} className={classes.tileTitle}>{course.course.name}</Link>}
							actionIcon={<div className={classes.action}>
								{course.completed ? (<CompletedIcon color="secondary" />)
									: (<InProgressIcon className={classes.progress} />)
								}</div>}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	)
}
