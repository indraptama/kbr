<template lang="pug">
  div(class="bg-white py-4 mb-8 border-b")
    // Top Card
    div(class="flex justify-between mb-4 px-4")
      div(class="text-xs")
        ul(class="list-reset flex flex-wrap")
          li(class="mr-2")
            span(class="inline-block py-1 px-3 rounded-full bg-grey text-white") Olah Raga
          li(class="mr-2")
            span(class="inline-block py-1 px-3 rounded-full bg-grey text-white") Nasional
      div(cLass="flex items-center")
        ul(class="list-reset flex")
          li S
          li M
          li Q
    // Card Title
    div(class="mb-4 px-4")
      h3(class="text-3xl mb-4 font-medium") Ini Test Berita Nasional atuh
      h4(class="text-normal text-grey font-light") 28 Juli 2018,  14:30 WIB

    // Card Image
    div(class="mb-4 px-4")
      a(href="block no-underline")
        div(class="Ratio")
          div(class="RatioContent bg-cover bg-center" :style="{ backgroundImage: 'url(' + imgUrl + ')' }")
    
    // Card COntent
    div(class="")
      div(class=" w-4/5 leading-normal px-4")
        p KPU menyatakan siap melangsungkan pemungutan suara ulang di 10 provinsi sesuai rekomendasi Bawaslu.
    

</template>

<script>

export default {
  name: 'NewsCard',
   props: {
    title: String,
    imgUrl: String,
    linkUrl: String
  }
}
</script>
