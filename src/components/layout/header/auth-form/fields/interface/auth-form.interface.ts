import { AuthType } from '@/shared/types/auth/auth.type'
import { Dispatch, SetStateAction } from 'react'

export interface IAuthForm {
	type: AuthType
	setType: Dispatch<SetStateAction<AuthType>>
}
