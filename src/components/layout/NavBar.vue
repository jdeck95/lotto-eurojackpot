<script setup lang="ts"></script>

<template>
  <q-toolbar class="bg-white text-black justify-center">
    <div class="row no-wrap">
      <img
        src="@/assets/wow-logo.png"
        alt="Wheel Of Wealth Logo"
        width="140px"
        hight="100px"
      />
      <div class="text-h4 column justify-center title q-mr-lg">Wheel Of Wealth</div>
    </div>
    <router-link
      class="q-mr-md"
      to="/"
      >Start</router-link
    >
    <router-link to="/eurojackpot">Eurojackpot</router-link>
  </q-toolbar>
</template>

<style scoped lang="scss">
@media screen and (max-width: $breakpoint-xs) {
  .title {
    display: none;
  }
}

a {
  text-decoration: none;
  font-size: 20px;
  color: black;
  padding: 12px;
  border-radius: 3px;

  &:hover {
    text-decoration: underline;
  }
}

.router-link-active {
  background-color: #e57a98;
  padding: 12px;
  text-decoration: underline;
}
</style>
