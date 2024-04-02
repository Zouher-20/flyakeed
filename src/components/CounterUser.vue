<template>
  <div class="c-pointer mt-3 color-secondary">
    <p @click="add">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 320 512"
        class="hover-opacity-hard"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
        ></path>
      </svg>
    </p>
    <p @click="minus"> 
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 320 512"
        class="hover-opacity-hard"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
        ></path>
      </svg>
    </p>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    // Emit a custom event with data
    const add = () => {
      emit('add-one', 'Data to pass to parent');
    };
    const minus = () => {
      emit('minus-one', 'Data to pass to parent');
    };

    return {
      add,minus
    };
  },
});
</script>
<style scoped>
.color-secondary{
  color: #ff56a1;
}
</style>