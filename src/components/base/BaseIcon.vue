<script setup lang="ts">
import { Icon } from '@iconify/vue'

/*
|------------------------------|
| Define Props                  |
|------------------------------|
*/
const { icon, width, height, customClass, customStyle } = defineProps({
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
| Define Methods                |
|------------------------------|
*/
const emit = defineEmits<{
  (event: 'iconClicked'): void
}>()

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
