<script setup lang="ts"></script>

<template>
  <q-toolbar class="toolbar text-white justify-center">
    <div class="row no-wrap">
      <img
        src="@/assets/wow-logo.png"
        alt="Wheel Of Wealth Logo"
        width="140px"
        hight="100px"
      />
      <div class="column justify-center title q-mr-lg">Wheel Of Wealth</div>
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
.toolbar {
  background-color: #333a65;
}

a {
  text-decoration: none;
  font-size: 20px;
  color: white;
  padding: 12px;
  border-radius: 3px;

  &:hover {
    text-decoration: underline;
  }
}

.router-link-active {
  background-color: #b7abb6;
  color: black;
  padding: 12px;
  text-decoration: underline;
}

.title {
  font-size: 26px;
  margin-left: -20px;
}

@media screen and (max-width: $breakpoint-xs) {
  .title {
    display: none;
  }
}
</style>
