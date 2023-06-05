<template>
  <div class="contact-us">
    <div class="stock">In Stock: 568</div>
    <div class="form-wrap">
      <span class="tips">Not the price you want? fill the from and we'll contact you
        ASAP.</span>
      <n-form ref="formRef" :label-width="80" :model="contactForm" :rules="rules" size="medium"
        require-mark-placement="left">
        <n-form-item label="Contact Name" path="name">
          <n-input v-model:value="contactForm.name" placeholder="" />
        </n-form-item>
        <n-form-item label="Business Email" path="email">
          <n-input v-model:value="contactForm.email" placeholder="" />
        </n-form-item>
        <n-form-item label="Telephone" path="tel">
          <n-input v-model:value="contactForm.tel" placeholder="" />
        </n-form-item>
        <n-form-item label="Company Name" path="company">
          <n-input v-model:value="contactForm.company" placeholder="" />
        </n-form-item>
        <n-form-item label="Country" path="country">
          <n-input v-model:value="contactForm.country" placeholder="" />
        </n-form-item>
        <n-form-item :label="contactForm.inquiry.name" :label-style="{ color: '#23ac38' }">
          <n-input-number v-model:value="contactForm.inquiry.count" :min="0" size="medium" placeholder="0"
            :style="{ width: '100%' }" />
        </n-form-item>
        <div class="form-btns">
          <n-button type="primary">QUICK RFQ</n-button>
          <n-button>ADD TO RFQ LIST</n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const contactForm = reactive({
  name: '',
  email: '',
  tel: '',
  company: '',
  country: '',
  inquiry: {
    name: 'Lad-600Du',
    count: 0
  }
})

const rules = {
  name: {
    required: true,
    message: 'name is required.',
    trigger: 'blur'
  },
  email: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error('email is required.');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return new Error('the email format is incorrect.');
      }
      return true;
    },
    trigger: 'blur'
  },
  tel: {
    required: true,
    message: 'telephone is required.',
    trigger: ['blur']
  },
  country: {
    required: true,
    message: 'country is required.',
    trigger: 'blur'
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  min-width: 25%;
  margin-left: 10px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  background: #f6f8f7;

  .stock {
    padding: 10px 35px;
    background: #23ac38;
    color: #fff;
  }

  .form-wrap {
    display: flex;
    flex-direction: column;
    padding: 15px 35px;

    .tips {
      margin-bottom: 20px;
      line-height: 24px;
      font-size: 14px;
      color: #3C93C9;
    }
  }

  .form-btns {
    display: flex;
    flex-direction: column;

    button {
      margin-bottom: 10px;
    }
  }
}
</style>