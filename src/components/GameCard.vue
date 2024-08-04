<script setup lang="ts">
interface Props {
  title: string;
  route: string;
  buttonLabel: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="column eurojackpot text-h3 col-11 col-sm-6 col-md-5 col-lg-3 q-px-lg rounded-borders">
    <div class="row justify-center q-mt-xl">{{ props.title }}</div>
    <q-btn
      :label="props.buttonLabel"
      outline
      color="white"
      class="q-my-xl"
      :to="props.route"
    />
  </div>
</template>
