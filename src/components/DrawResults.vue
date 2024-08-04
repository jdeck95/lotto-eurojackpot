<script setup lang="ts">
interface Props {
  numbers: string[];
  additionalNumbers: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    v-for="number in props.numbers"
    :key="number"
    class="draw-number"
  >
    {{ number }}
  </div>
  <div class="column justify-center q-mx-md">+</div>
  <div
    v-for="additionalNumber in props.additionalNumbers"
    :key="additionalNumber"
    class="draw-number draw-number--additional"
  >
    {{ additionalNumber }}
  </div>
</template>

<style scoped lang="scss">
.draw-number {
  border: 1px solid grey;
  border-radius: 50%;
  text-align: center;
  line-height: 16px;
  padding: 16px;
  width: 50px;
  font-weight: 800;

  &--additional {
    background-color: #ffd535;
    border: 0px;
  }
}
</style>
