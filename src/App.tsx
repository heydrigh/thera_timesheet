import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import GlobalStyles from '@styles/global'
import Routes from 'routes'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store, { persistor } from '@services/store'

function App() {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<Routes />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}

export default App
