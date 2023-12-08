import React from 'react'
import MainRouter from './MainRouter'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

const App = () => {
	// React.useEffect(() => {
	// 	const jssStyles = document.querySelector('#jss-server-side')
	// 	if (jssStyles) {
	// 		jssStyles.parentNode.removeChild(jssStyles)
	// 	}
	// }, [])
	return (
		<RouterProvider router={MainRouter}>
			<ThemeProvider theme={theme}>
				<MainRouter />
			</ThemeProvider>
		</RouterProvider>
	)
}

export default App
