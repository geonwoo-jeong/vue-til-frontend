<template>
  <form action="">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" />
    </div>
    <div>
      <label for="password">PASSWORD: </label>
      <input id="password" type="text" />
    </div>
    <div>
      <label for="nickname">NICKNAME: </label>
      <input id="nickname" type="text" />
    </div>
    <button type="submit">LOGIN</button>
  </form>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
