<template>
  <div>

  </div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await this.$axios.$get(
        `https://api.covid19api.com/summary?`
      );
      console.log(
        response.Countries.filter(data => data.Country === "Indonesia")[0]
      );
    }
  }
};
</script>
