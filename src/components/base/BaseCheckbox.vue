<script lang="ts" setup>
import { NCheckbox } from 'naive-ui'
import type { PropType } from 'vue'

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
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'large',
  },
})
</script>

<template>
  <div class="w-full flex flex-col justify-center gap-0.5">
    <n-checkbox :label="label" :size="size" class="" />
  </div>
</template>
