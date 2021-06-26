import { date } from "quasar";

export let CommonMixin = {
  methods: {
    toDatetimeStamp(dateString) {
      if (!dateString) return null;
      return new Date(dateString).getTime() || null;
    },

    toDateString(datetimeStamp) {
      if (!datetimeStamp) return "";
      return new Date(datetimeStamp).toISOString().split("T")[0];
    },

    formatDate(date1, format) {
      return date.formatDate(date1, format);
    },

    async sleep(duration) {
      return new Promise(accept => {
        setTimeout(accept, duration);
      });
    },

    alert(title, message) {
      return new Promise(accept => {
        this.$q
          .dialog({
            title,
            message
          })
          .onOk(() => {
            accept(true);
          })
          .onCancel(() => {
            accept(false);
          })
          .onDismiss(() => {
            accept(false);
          });
      });
    },

    confirm(title, message) {
      return new Promise(accept => {
        this.$q
          .dialog({
            title,
            message,
            cancel: true,
            persistent: true
          })
          .onOk(() => {
            accept(true);
          })
          .onCancel(() => {
            accept(false);
          })
          .onDismiss(() => {
            accept(false);
          });
      });
    }
  }
};
