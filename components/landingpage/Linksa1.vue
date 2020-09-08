<template>
  <nuxt-link
    :to="link.to"
    v-text="link.text"
    class="py-2 md:text-base text-sm font-semibold border-b-2 border-transparent hover:border-gray-800"
  ></nuxt-link>
</template>

<script>
export default {
  name: "Linksa1",
  props: {
    link: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
