import { createStore } from 'vuex'
import { User } from '../constant/type'

export default createStore({
    state: {
        user: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            verifiedRequestId: '',
            authType: '',
            deviceType: ''
        },
        otp_flag: false
    },
    mutations: {
        setUserInformation(state: any, { firstName, lastName, phoneNumber, email, password, verifiedRequestId, authType, deviceType }: User) {
            const user = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                verifiedRequestId,
                authType,
                deviceType
            }
            state.user = user
        },
        setOtpFlag(state: any, status: boolean){
            state.otp_flag = status
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})