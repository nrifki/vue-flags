<template lang="pug">
  span(
    @click="onClick"
    :class=`[
      "vue-flag",
      "vue-flag--" + flag,
      "vue-flag--" + size,
      {
        "vue-flag--border": border,
        "vue-flag--circular": circular,
        "vue-flag--clickable": clickable
      }
    ]`
  )
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    flag: {
      type: String,
      default: "france"
    },
    size: {
      type: String,
      default: "small",
      validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  },

  methods: {
    onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.flag, event);
      }
    }
  }
};
</script>

<style lang="scss">
$c: ".vue-flag";

#{$c} {
  display: inline-block;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  // --> SIZES <--

  &--small {
    width: 40px;
    height: 25px;

    &#{$c}--circular {
      width: 25px;
      height: 25px;
    }
  }

  &--large {
    width: 80px;
    height: 50px;

    &#{$c}--circular {
      width: 50px;
      height: 50px;
    }
  }

  // --> BOOLEANS <--

  &--border {
    border: 1px solid #ffffff;
  }

  &--circular {
    border-radius: 100px;
  }

  &--clickable {
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;
      transition: box-shadow ease-in-out 0s;
    }
  }
}
</style>
