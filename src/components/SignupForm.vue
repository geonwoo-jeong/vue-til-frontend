<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">PASSWORD: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">NICKNAME: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          :disabled="!isUsernameValid || !password || !nickname"
          type="submit"
          class="btn"
        >
          SIGN UP
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const { data } = await registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      });
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
