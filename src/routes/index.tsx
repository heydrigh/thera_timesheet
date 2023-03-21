import useAppSelector from '@hooks/useAppSelector'
import Dashboard from '@pages/Dashboard'
import Home from '@pages/Home'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { RoutesEnum } from './routes'

export default function MainRouter() {
	const { accessToken } = useAppSelector((state) => state.auth)

	const isAuth = !!accessToken
	return (
		<BrowserRouter>
			<Routes>
				{isAuth ? (
					<>
						<Route path={RoutesEnum.Dashboard} element={<Dashboard />} />
						<Route path='*' element={<Navigate to={RoutesEnum.Dashboard} />} />
					</>
				) : (
					<>
						<Route path={RoutesEnum.Home} element={<Home />} />
						<Route path='*' element={<Navigate to={RoutesEnum.Home} />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	)
}
