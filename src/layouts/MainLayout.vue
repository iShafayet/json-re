<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="alignq-center">
          <q-avatar rounded>
        <img
            alt="JSON R.E. logo"
            src="~assets/logo-main.png"
          />
      </q-avatar>
          
          JSON Reverse Engineering Toolkit
        </q-toolbar-title>

        <div>{{ appVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      appVersion: "0.0.1"
    };
  }
};
</script>
