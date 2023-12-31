import config from '../config/config'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import courseRoutes from './routes/course.routes'
import enrollmentRoutes from './routes/enrollment.routes'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from '../client/MainRouter'
import { StaticRouter } from 'react-router-dom'

import { ServerStyleSheets, ThemeProvider } from '@mui/material'
import theme from './../client/theme'


//TODO comment out before entering production
import devBundle from '../devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//TODO comment out before entering production
devBundle.compile(app)

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://localhost/19000", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', courseRoutes)
app.use('/', enrollmentRoutes)

app.get('*', (req, res) => {
	const sheets = new ServerStyleSheets()
	const context = {}
	const markup = ReactDOMServer.renderToString(
		sheets.collect(
			<StaticRouter location={req.url} context={context}>
				<ThemeProvider theme={theme}>
					<MainRouter />
				</ThemeProvider>
			</StaticRouter>
		)
	)
	if (context.url) {
		return res.redirect(303, context.url)
	}
	const css = sheets.toString()
	res.status(200).send(Template({
		markup: markup,
		css: css
	}))
})

// Catch unauthorized errors
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ "error": err.name + ": " + err.message })
	} else if (err) {
		res.status(400).json({ "error": err.name + ": " + err.message })
		console.log(err)
	}
})

app.listen(port = 4000, (err) => {
	if (err) {
		console.log(err)
	}
	console.info('Server started on port %s.', port)
})
