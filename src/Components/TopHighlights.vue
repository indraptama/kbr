<template lang="pug">
  a(class="Ratio block no-underline" :href='linkUrl')
    div(class="RatioContent bg-cover bg-center" :style="{ backgroundImage: 'url(' + imgUrl + ')' }" )
      div(class="absolute pin-b mb-4 pl-4 pr-4")
        h3(class="") 
          span(class="bg-red text-white text-lg p-1 font-normal leading-normal") {{ title }}
</template>

<script>
export default {
  name: 'TopHighlights',
  props: {
    title: String,
    imgUrl: String,
    linkUrl: String
  }
}
</script>
