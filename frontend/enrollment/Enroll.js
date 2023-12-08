import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { createStyles } from '@mui/material/styles'
import { create } from './api-enrollment'
import auth from './../auth/auth-helper'
import { Route } from 'react-router-dom'



export default function Enroll(props) {
	const classes =createStyles(theme => ({
		form: {
			minWidth: 500
		}
	}))
	const [values, setValues] = useState({
		enrollmentId: '',
		error: '',
		redirect: false
	})
	const jwt = auth.isAuthenticated()
	const clickEnroll = () => {
		create({
			courseId: props.courseId
		}, {
			t: jwt.token
		}).then((data) => {
			if (data && data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setValues({ ...values, enrollmentId: data._id, redirect: true })
			}
		})
	}

	if (values.redirect) {
		return (<Route redirect={'/learn/' + values.enrollmentId} />)
	}

	return (
		<Button variant="contained" color="secondary" onClick={clickEnroll}> Enroll </Button>
	)
}

Enroll.propTypes = {
	courseId: PropTypes.string.isRequired
}
