<template>
  <div class="card" :style="{background: backgroundColor}">
    <h4 class="title">{{title}}</h4>
    <p class="text-secondary">{{subTitle}}</p>
    <p><small>{{text}}</small></p>
    <CustomButton :label="title"/>
  </div>
</template>

<script>
import CustomButton from '../stories/Button.vue'
export default {
  name:'TheCard',
  components: {
    CustomButton
  },
  props: {
    title: String,
    subTitle: String,
    text: String,
    backgroundColor: String
  }
}
</script>
