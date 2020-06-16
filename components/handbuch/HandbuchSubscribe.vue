<template>
  <div id="form-wrapper">
    <h3>{{ this.register['intro']['title'] }}</h3>
    <p>{{ this.register['intro']['subtitle'] }}</p>
    <form
      ref="nl2go_form"
      method="POST"
      v-on:submit.prevent="handleSubmit()"
    >
      <label>{{ this.register['form']['first_name'] }}</label>
      <input
        type="text" name="first_name"
        :placeholder="this.register['form']['first_name']"
        v-model="first_name"
      />
      <label>{{ this.register['form']['last_name'] }}</label>
      <input
        type="text" name="last_name"
        :placeholder="this.register['form']['last_name']"
        v-model="last_name"
      />
      <label>{{ this.register['form']['email'] }}</label>
      <input
        type="email"
        name="email"
        :placeholder="this.register['form']['email']"
        v-model="email"
        required
      />
      <span class="mandatory">{{ this.register['form']['mandatory'] }}</span>
      <div class="agb">
        <input type="checkbox" required />
        <span>{{ this.register['form']['agb'] }}</span>
        <span v-html="this.register['form']['unsubscribe']"></span>
    </div>
      <br />
      <input class="button" type="submit" :value="this.register['form']['button']" />
    </form>
  </div>
</template>

<script>
export default {
  name: "HandbuchSubscribe",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null
    }
  },
  props: ["content", "lang"],
  computed: {
    register() { return this.content[this.lang]['innovationshandbuch']['register']; }
  },
  methods: {
    handleSubmit: function(e) {
      //Formular initialisieren
      !(function(e, t, n, c, r, a, i) {
        (e.Newsletter2GoTrackingObject = r),
          (e[r] =
            e[r] ||
            function() {
              (e[r].q = e[r].q || []).push(arguments);
            }),
          (e[r].l = 1 * new Date()),
          (a = t.createElement(n)),
          (i = t.getElementsByTagName(n)[0]),
          (a.async = 1),
          (a.src = c),
          i.parentNode.insertBefore(a, i);
      })(
        window,
        document,
        "script",
        "https://static.newsletter2go.com/utils.js",
        "n2g"
      );
      n2g("create", this.register['form']['token']);

      n2g(
        "subscribe:send",
        {
          recipient: {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email
          }
        },
        function(data) {
          if (data.status == 201) {
            //Ausgabe der Statusmeldung anstelle des Formulars
            console.log('Anmeldung erfolgreich!');
            
          } else if (data.status == 200) {
            //Ausgabe der Statusmeldung anstelle des Formulars
            console.log('Du bist bereits angemeldet!');
            
          } else {
            //Ausgabe der Statusmeldung anstelle des Formulars
            console.log('Fehler');
            
          }
        },
        function(data) {
          //Ausgabe der Statusmeldung anstelle des Formulars
          console.log('Fehler');
          
        }
      );
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/style/style.scss";

  div#form-wrapper {
    width: 100%;
    height: 100%;
    padding: $spacing-l;
    font-size: $size-medium;
    background-color: $white;
    box-shadow: 0 2px 60px 0 rgba(47,47,162,.1);

    @media screen and (min-width: $tablet) {
      transform: translateY(-200px);
    }

    form > * {
      margin-top: $spacing-m;
    }

    h3 {
      font-weight: $weight-bold;
    }

    label {
      display: none;
    }

    input {
      background: $color-primary--lightest;
      border: none;
      font-size: $size-medium;
      &[type=text], &[type=email] {
        width: 100%;
        padding: $spacing-s;
        color: $text;
      }
      &[type=submit] {
        color: $white;
        background-color: $color-secondary;
      }
    }

    .mandatory {
      font-size: 10px;
      font-weight: $weight-bold;
    }

    .agb {
      display: inline-block;
      color: $color-primary;
      font-size: 10px;
      line-height: 140%;
    }
  }
</style>
