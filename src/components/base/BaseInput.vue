<script lang="ts" setup>
import { NInput } from 'naive-ui'
import { ref, type PropType } from 'vue'

/*
|------------------------------|
| Define Props                  |
|------------------------------|
*/
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<'text' | 'textarea' | 'password'>,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
  },
  rows: {
    type: String,
    required: false,
  },
})

/*
|------------------------------|
| Define Refs                  |
|------------------------------|
*/
const inputValue = ref('')
</script>

<template>
  <div class="w-full flex flex-col gap-0.5">
    <label for="firstName" class="text-base text-[#1f2937]">{{ label }}</label>
    <n-input
      v-model:value="inputValue"
      :type="type"
      size="large"
      :placeholder="placeholder"
      :rows="rows"
    />
  </div>
</template>
