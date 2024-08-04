<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import { games } from '@/configs/games';
</script>

<template>
  <h3 class="q-px-md">Herzlich Willkommen</h3>

  <div class="row col-11">
    <GameCard
      v-for="game in games"
      :key="game.title"
      :title="game.title"
      :route="game.route"
      :button-label="game.buttonLabel"
    />
  </div>
</template>

<style scoped lang="scss">
.welcome-container {
  background-color: #a2a9d6;
  color: black;
}

.eurojackpot {
  background-color: #c09f38;
  color: white;
}
</style>
