<template>
    <v-container>
        <v-form>
            <v-text-field label="Email" v-model="Email" variant="outlined"></v-text-field>
            <v-text-field label="Password" v-model="Password" variant="outlined"></v-text-field>
            <v-btn @click="login">đăng nhập</v-btn>
            {{ token }}
        </v-form>
    </v-container>
</template>

<script lang="ts" >
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup() {
        const Email = ref('')
        const Password = ref('')
        const store = useStore()
        const router = useRouter();
        const token = localStorage.getItem('token')
        const login = () => {
            store.dispatch('login', { Email: Email.value, Password: Password.value })
                .then(() => {
                    router.push('/user')
                });
        }
        return {
            Email, Password, login, token
        }
    }
}
</script>

<style></style>