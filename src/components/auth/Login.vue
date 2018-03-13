<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <form @submit.prevent="login">
      <input type="text" name="username" id="username" v-model="form.username" placeholder="Username">
      <input type="password" name="password" id="password" v-model="form.password" placeholder="Password">
      <button type="submit" :disabled="loading">{{ $t('general.Login') }}</button>
    </form>
    <div>
      <br>
      <button type="button" @click="setLocale('id')" :disabled="$store.getters.locale === 'id'">ID</button>
      <button type="button" @click="setLocale('en')" :disabled="$store.getters.locale === 'en'">EN</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.loading = false
          this.$router.replace('/')
        })
        .catch(error => {
          this.loading = false
          alert(error)
        })
    },
    setLocale (locale) {
      this.$i18n.set(locale)
      this.$store.dispatch('setLocale', locale)
    }
  }
}
</script>
