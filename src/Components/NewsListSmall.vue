<template lang="pug">
  div(class="flex")
    div(class="w-16")
      div(class="Ratio Ratio--1x1")
        div(class="RatioContent bg-cover bg-center" :style="{ backgroundImage: 'url(' + imgUrl + ')' }" )
          div(class="rank absolute inline-block pin-t pin-l bg-red text-white font-medium text-sm p-1") {{ rank }}
    
    div(class="pl-4 flex-1")
      h5(class="text-sm font-medium leading-normal") {{ title }}



</template>

<script>
export default {
  name: 'NewsListSmall',
  props: {
    title: String,
    imgUrl: String,
    linkUrl: String,
    rank: String,
  }
}
</script>
