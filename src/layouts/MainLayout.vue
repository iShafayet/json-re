<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="alignq-center">
          <q-avatar rounded>
            <img alt="JSON R.E. logo" src="~assets/logo-main.png" />
          </q-avatar>

          JSON Reverse Engineering Toolkit
        </q-toolbar-title>

        <div>v{{ appVersion }}/b{{ appBuild }}{{ tag }}</div>
        <q-btn
          color="bg-primary"
          icon="help"
          label="About"
          rounded
          outline
          style="color: white; margin-right: 2px; margin-left: 8px;"
          @click="helpClicked"
        />
      </q-toolbar>
    </q-header>

    <q-dialog
      v-model="showWelcomeDialog"
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-avatar rounded>
            <img alt="JSON R.E. logo" src="~assets/logo-main.png" />
          </q-avatar>
          <div>JSON R.E. Toolkit</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">
            Generate Java POJOs &amp; SQL tables directly from JSON.
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <img
            alt="JSON R.E. logo"
            src="~assets/welcome-graphics-1.png"
            style="max-width: 500px; display: block; text-align: center; margin-left: auto; margin-right: auto; margin-top: -10px;"
          />

          <div style="font-weight: bold;">How it works?</div>
          <div style="margin-left: 8px;">
            1. Enter your JSON. <br />
            2. JSON R.E. Toolkit will intelligently reverse engineer it and
            generate schema.
            <br />
            3. From the schema we can instantly generate Java POJO, SQL Tables
            and more.

            <div style="margin-top: 8px; font-style: italic;">
              Coming soon - MongoDb Schema, Mongoose, Joi validation, TypeScript
              objects, SQL sequelize.
            </div>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            This is a completely FOSS tool. The
            <a
              style="font-weight: bold; color: white;"
              href="https://github.com/iShafayet/json-re"
              target="_blank"
              >source code</a
            >
            is under the MIT License.
            <br />
            2021 ©
            <a
              style="font-weight: bold; color: white;"
              href="https://github.com/iShafayet"
              target="_blank"
              >Sayem Shafayet</a
            >
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

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
    const welcomeDialogKey = "json-re--hasWelcomeDialogBeenShown";

    let showWelcomeDialog = true;
    if (localStorage.getItem(welcomeDialogKey)) {
      showWelcomeDialog = false;
    } else {
      // TODO: Do this with a do not show again checkbox.
      // localStorage.setItem(welcomeDialogKey, "yes");
    }

    return {
      showWelcomeDialog: true,
      appVersion: "0.2.1",
      tag: " (POC)",
      appBuild: 20
    };
  },
  methods: {
    helpClicked() {
      this.showWelcomeDialog = true;
    }
  }
};
</script>
