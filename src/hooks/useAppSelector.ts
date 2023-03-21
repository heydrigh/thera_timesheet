import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@services/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
