<template>
  <div class="flex flex-wrap bg-pink-400">
    <div
      v-for="user in allUsers"
      :key="user.id"
      class="bg-gray-600 rounded-lg mx-2"
    >
      {{user.first_name}}-{{user.last_name}}-{{user.email}}-{{user.avatar}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  layout: "covid",
  mounted() {
    this.getAllUsers();
  },
  computed: {
    ...mapState({ allUsers: state => state.todos.users })
  },
  methods: {
    ...mapActions({
      getAllUsers: "todos/getAllUsers"
    })
  }
};
</script>
