<template lang="pug">
  div(class="bg-white py-12 border-b")
    
    // Top Card
    div(class="flex justify-between items-center mb-4 px-4")
      div(class="text-xs")
        ul(class="list-reset flex flex-wrap")
          li(class="mr-2")
            span(class="inline-block py-1 px-3 rounded bg-red text-white") Olah Raga
          li(class="mr-2")
            span(class="inline-block py-1 px-3 rounded bg-red text-white") Internasional
      div(cLass="flex items-center")
        ul(class="list-reset flex text-2xl text-grey")
          li(class="mr-4")
            i(class="icon icon-share")
          li(class="mr-4")
            i(class="icon icon-favorite_border")
          li
            i(class="icon icon-turned_in_not")
   
    // Card Title
    div(class="mb-4 px-4")
      h3(class="text-3xl mb-4 font-base leading-tight") {{title}}
      h4(class="text-normal text-grey-darkest font-light") {{date}}

    // Card Image
    div(class="mb-4 px-4")
      a(class="block no-underline" href="#")
        div(class="Ratio")
          div(class="RatioContent bg-cover bg-center" :style="{ backgroundImage: 'url(' + imgUrl + ')' }")
    
    // Card COntent
    div(class="")
      div(class=" w-4/5 leading-normal px-4")
        p {{preview}}
    

</template>

<script>

export default {
  name: 'NewsCard',
   props: {
    title: String,
    imgUrl: String,
    linkUrl: String,
    date: String,
    preview: String,
  }
}
</script>
