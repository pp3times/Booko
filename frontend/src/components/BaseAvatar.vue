<template>
  <div
    class="w-6 h-6 flex items-center justify-center uppercase text-white font-medium shadow"
    :class="avatarClasses"
  >
    <img
      v-if="$attrs.src"
      class="w-full h-full overflow-hidden"
      :class="roundClasses"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <span v-else>
      <slot>{{ avatarText }}</slot>
    </span>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "teal",
    },
    size: {
      type: String,
      default: "md", //sm, md, lg
    },
    round: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    sizeClasses() {
      const sizeMappings = {
        sm: `h-8 w-8`,
        md: `h-10 w-10 text-md`,
        lg: `text-lg h-16 w-16 text-xl`,
      };
      return sizeMappings[this.size] || sizeMappings.md;
    },
    roundClasses() {
      return this.round ? "rounded-full" : "rounded";
    },
    avatarClasses() {
      return `bg-${this.color}-500 ${this.roundClasses} ${this.sizeClasses}`;
    },
    avatarText() {
      if (!this.name || typeof this.name !== "string" || !this.name.length) {
        return "";
      }
      return this.name.charAt(0);
    },
  },
};
</script>
