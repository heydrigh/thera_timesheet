import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@services/store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
