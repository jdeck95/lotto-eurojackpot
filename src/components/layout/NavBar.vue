<script setup lang="ts"></script>

<template>
  <q-toolbar class="bg-white text-black">
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
      class="q-mx-sm"
      to="/"
      >Start</router-link
    >
    <router-link
      class="q-mx-sm"
      to="/eurojackpot"
      >Eurojackpot</router-link
    >
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
}

.router-link-active {
  background-color: #e57a98;
  border-radius: 3px;
  padding: 12px;
}
</style>
