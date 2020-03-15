<template>
  <div class="contents">
    <h1 class="page-header">CREATE POST</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">TITLE:</label>
          <input id="title" type="text" />
        </div>
        <div>
          <label for="contents">CONTENTS:</label>
          <textarea id="contents" type="text" rows="3" />
        </div>
      </form>
      <button type="submit" class="btn">Create</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
