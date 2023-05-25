<template>
  <div class="card" :style="{background: backgroundColor}">
    <h4 class="title">{{title}}</h4>
    <p class="text-secondary">{{subTitle}}</p>
    <small>{{text}}</small>
  </div>
</template>

<script>
export default {
  name:'TheCard',
  props: {
    title: String,
    subTitle: String,
    text: String,
    backgroundColor: String
  }
}
</script>
