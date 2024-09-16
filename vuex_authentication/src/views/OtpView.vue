<template>
    <div class="flex items-center justify-center p-4">
        <form class="w-[50%]" @submit.prevent="register">
            <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 ">Otp Code</label>
                <input v-model="otpcode" type="text" id="confirm_password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxxx" pattern="[0-9]{4}" maxlength="4" required />
            </div>
            <div class="flex gap-5 items-center">
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                <p class="text-red-600 text-sm" v-if="errorMessages">{{ errorMessages }}</p>
            </div>
        </form>
    </div>
</template>

<script>
import store from '../store';

export default {
    name: 'otp-verification-view',
    data() {
        return {
            otpcode: '',
            errorMessages: '',
        }
    },
    methods: {
        async register() {
            const url = "https://kaseapp1dev.kasegro.com/api/r1/register"
            try {
                console.log({
                        'verified_code': this.otpcode,
                        'phone': store.state.user.phoneNumber,
                        'first_name': store.state.user.firstName,
                        "last_name": store.state.user.lastName,
                        "email": store.state.user.email,
                        "password": store.state.user.password,
                        "verified_request_id": store.state.user.verifiedRequestId,
                        "auth_type": store.state.user.authType,
                        "device_type": store.state.user.deviceType
            })
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'verified_code': this.otpcode,
                        'phone': store.state.user.phoneNumber,
                        'first_name': store.state.user.firstName,
                        "last_name": store.state.user.lastName,
                        "email": store.state.user.email,
                        "password": store.state.user.password,
                        "verified_request_id": store.state.user.verifiedRequestId,
                        "auth_type": store.state.user.authType,
                        "device_type": store.state.user.deviceType
                    })
                })

                if (response.ok !== 201) {
                    this.errorMessages = 'OTP code not match'
                    throw new Error(`Something went wrong`)
                }

                const body = await response.json()
                console.log(body)
                // document.cookie = "accessToken=" + encodeURIComponent(body.data.accessToken) + "; 365*100; path=/"
                this.$router.push('/')

            } catch (error) {
                console.error('Error fetching data:', error)
                throw error
            }
        }
    },
    beforeCreate() {
        if (!store.state.otp_flag) this.$router.replace('/register')
    },
    beforeRouteLeave(to, from, next) {
        if (confirm('Are you sure you want to leave?')) {
            store.commit('setOtpFlag', false)
            next();
        } else {
            next(false);
        }
    }
}
</script>