<template>
  <div>
    <h1>{{ $t('general.Welcome') }} {{ user.username }}</h1>
    <button type="button" @click="logout">LOGOUT</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.replace('/login')
        })
    }
  }
}
</script>
