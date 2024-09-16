<template>
    <div class="flex items-center justify-center p-4">
        <form class="w-[50%]" @submit.prevent="otp">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">First
                        name</label>
                    <input v-model="firstName" type="text" id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last
                        name</label>
                    <input v-model="lastName" type="text" id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe" required />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 ">Phone
                        number</label>
                    <input v-model="phoneNumber" type="tel" id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="012345678" pattern="\d{9}|\d{10}" maxlength="10" required />
                </div>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email
                    address</label>
                <input v-model="email" type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com" required />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input v-model="password" type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••" required />
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 light:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the
                    <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <div class="flex gap-5 items-center">
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                <p class="text-red-600 text-sm" v-if="errorMessages">{{ errorMessages }}</p>
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import store from '../store';

export default {
    name: "register-view",
    data() {
        return {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            errorMessages: ''
        }
    },
    methods: {
        async otp() {
            const url = "https://kaseapp1dev.kasegro.com/api/r1/get-otp-code"
            try {
                const formatted_number = this.phoneNumber.replace(/(\d{3})(\d{3})/, '$1 $2 ') + this.phoneNumber.slice(9)
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'phone': formatted_number })
                })

                if (!response.ok) {
                    this.errorMessages = 'Phone number is already exist'
                    throw new Error(`Network response was not ok (status ${response.status})`)
                }
                
                const body = await response.json()
                const verifiedRequestId = body.data.otp_verified_id
                console.log({ firstName: this.firstName, lastName: this.lastName, phoneNumber: formatted_number, email: this.email, password: this.password, verifiedRequestId: verifiedRequestId, authType: "phone", deviceType: "Web" })
                console.log(body.data)
                store.commit('setUserInformation', { firstName: this.firstName, lastName: this.lastName, phoneNumber: formatted_number, email: this.email, password: this.password, verifiedRequestId: verifiedRequestId, authType: "phone", deviceType: "Web" })
                store.commit('setOtpFlag', true)
                this.$router.push('/otp-verification')

            } catch (error) {
                console.error('Error fetching data:', error)
                throw error
            }
        }
    }
}
</script>