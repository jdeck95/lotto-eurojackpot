<script setup lang="ts">
interface Props {
  title: string;
  route: string;
  buttonLabel: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="column eurojackpot text-h3 col-5 q-px-xl rounded-borders">
    <div class="q-mt-xl">{{ props.title }}</div>
    <q-btn
      :label="props.buttonLabel"
      outline
      color="white"
      class="q-my-xl"
      :to="props.route"
    />
  </div>
</template>
