<script setup lang="ts">
import { Icon } from '@iconify/vue'

/*
|------------------------------|
| Define Props                  |
|------------------------------|
*/
defineProps({
  icon: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  customClass: {
    type: String,
  },
  customStyle: {
    type: String,
  },
})

/*
|------------------------------|
| Define Emits                  |
|------------------------------|
*/
const emit = defineEmits<{
  (event: 'iconClicked'): void
}>()

/*
|------------------------------|
| Define Functions              |
|------------------------------|
*/
const handleIconClick = () => {
  emit('iconClicked')
}
</script>

<template>
  <Icon
    :icon="icon"
    :width="width"
    :height="height"
    :class="customClass"
    :style="customStyle"
    @click="handleIconClick"
    class="cursor-pointer"
  />
</template>
