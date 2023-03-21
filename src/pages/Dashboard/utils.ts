import { DateTime } from 'luxon'

export const todayDate = DateTime.now().toFormat('dd/MM/yyyy')
