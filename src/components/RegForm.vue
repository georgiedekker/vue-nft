<template>
  <p>Message is: {{ message }}</p>
  <input v-model.lazy.trim="message" placeholder="edit me" />

  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ longMessage }}</p>
  <textarea
    v-model.lazy.trim="longMessage"
    placeholder="add multiple lines"
  ></textarea>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
</template>
<script>
export default {
  name: "RegForm",
  props: [],
  methods: {},
  data() {
    return {
      message: null,
      longMessage: null,
      checked: false,
      picked: null,
    };
  },
};
</script>