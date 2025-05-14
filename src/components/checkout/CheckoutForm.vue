<script lang="ts" setup>
import { NButton } from 'naive-ui'

import BaseInput from '../base/BaseInput.vue'
import BaseCheckbox from '../base/BaseCheckbox.vue'
import { computed, reactive, watch } from 'vue'
import { emailValidator, requiredField } from '@/validator'
import useVuelidate from '@vuelidate/core'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  state: '',
  city: '',
  zipCode: '',
  address: '',
  agreed: false,
})

const rules = computed(() => ({
  firstName: { requiredField },
  lastName: { requiredField },
  email: { requiredField, emailValidator },
  country: { requiredField },
  state: { requiredField },
  city: { requiredField },
  zipCode: { requiredField },
  address: { requiredField },
  agreed: {
    requiredField: requiredField,
  },
}))

const v$ = useVuelidate(rules, form)

const submitForm = () => {
  v$.value.$touch()
  if (!v$.value.$invalid) {
    // Proceed with form submission logic
    console.log('Form submitted:', form)
  }
}

watch(
  form,
  () => {
    v$.value.$touch()
  },
  { deep: true },
)
</script>

<template>
  <form @submit.prevent="submitForm" class="w-[70%] flex flex-col gap-5">
    <h2 class="text-xl font-medium text-[#1f2937]">Shipping Information</h2>

    <div class="flex gap-4">
      <BaseInput
        v-model="form.lastName"
        type="text"
        label="First Name"
        placeholder="Enter first Name"
        :error="v$.firstName.$error"
        :error-message="v$.firstName.$errors[0]?.$message"
      />
      <BaseInput
        v-model="form.lastName"
        type="text"
        label="Last Name"
        placeholder="Enter last Name"
        :error="v$.lastName.$error"
        :error-message="v$.lastName.$errors[0]?.$message"
      />
    </div>

    <BaseInput
      v-model="form.email"
      type="text"
      label="Email address"
      placeholder="Enter email address"
      :error="v$.email.$error"
      :error-message="v$.email.$errors[0]?.$message"
    />

    <div class="flex gap-4">
      <BaseInput
        v-model="form.country"
        type="text"
        label="Country"
        placeholder="Enter country"
        :error="v$.country.$error"
        :error-message="v$.country.$errors[0]?.$message"
      />
      <BaseInput
        v-model="form.state"
        type="text"
        label="State"
        placeholder="Enter state"
        :error="v$.state.$error"
        :error-message="v$.state.$errors[0]?.$message"
      />
    </div>

    <div class="flex gap-4">
      <BaseInput
        v-model="form.city"
        type="text"
        label="City"
        placeholder="Enter city"
        :error="v$.city.$error"
        :error-message="v$.city.$errors[0]?.$message"
      />
      <BaseInput
        v-model="form.zipCode"
        type="text"
        label="ZIP Code"
        placeholder="Enter ZIP Code"
        :error="v$.zipCode.$error"
        :error-message="v$.zipCode.$errors[0]?.$message"
      />
    </div>

    <BaseInput
      v-model="form.address"
      type="textarea"
      label="Address"
      placeholder="Enter address"
      rows="2"
      :error="v$.address.$error"
      :error-message="v$.address.$errors[0]?.$message"
    />

    <div class="flex gap-4">
      <BaseCheckbox
        v-model="form.agreed"
        label="I have read and agree to the Terms and Conditions"
        :error="v$.agreed.$error"
        :error-message="v$.agreed.$errors[0]?.$message"
      />
    </div>

    <div class="flex items-center gap-3">
      <n-button type="tertiary" class="w-full h-8" ghost>Back</n-button>
      <n-button type="primary" class="w-full h-8" :disabled="v$.$invalid" native-type="submit"
        >Place Order</n-button
      >
    </div>
  </form>
</template>
