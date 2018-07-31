<template lang="pug">
  div(class="shadow")
    //- this is Highlight news 
    div(class="bg-white py-8 px-4")
      div(class="w-full max-w-3xl mx-auto")
        ul(class="list-reset flex")
          li(class="w-1/3")
            <TopHighlights title="Tops" imgUrl="https://source.unsplash.com/480x320/?nature"/>
          li(class="w-1/3 mx-4")
            <TopHighlights title="ini adalah test 1" imgUrl="https://source.unsplash.com/480x320/?people"/>
          li(class="w-1/3 mx-4")
            <TopHighlights title="ini adalah test 1" imgUrl="https://source.unsplash.com/480x320/?sport"/>
            


    //- Main News
    div(class="px-4 border-t")
      div(class="flex w-full max-w-3xl mx-auto")
        div(class="pr-4 w-1/4 pt-4")
          h2.text-sm Sidebar Left
        div(class="px-4 w-1/2 pt-4 border-l border-r")
          h2.text-sm Timeline
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?people"/>
        div(class="pl-4 w-1/4 pt-4")
          h2.text-sm Sidebar Right



</template>


<script>

import TopHighlights from '../Components/TopHighlights.vue';
import NewsCard from '../Components/NewsCard.vue';

export default {
  name: 'Home',
  components: {
    TopHighlights,
    NewsCard
  },

  data: function() {
    return {
      tops: [
        {
          name: 'test no 1',
          imgUrl : "https://source.unsplash.com/480x320/?nature",
          linkUrl : "#"
        },
        {
          name: 'test no 2',
          imgUrl : "https://source.unsplash.com/480x320/?nature",
          linkUrl : "#"
        },
        {
          name: 'test no 3',
          imgUrl : "https://source.unsplash.com/480x320/?nature",
          linkUrl : "#"
        }
      ]
    }
  }
}
</script>
