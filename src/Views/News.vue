<template lang="pug">
  div(class="")


    //- Main News
    div(class="px-4")
      div(class="flex w-full max-w-4xl mx-auto")
        
        // Left Side
        div(class="pr-4 w-1/4 pt-4")
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Trendings
          ul(class="list-reset mb-4")
            li(v-for='pop in popular' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='pop.name' :imgUrl='pop.imgUrl' :rank='pop.rank'/>
          
          div(class="bg-blue ads300x250 mb-8")
            h2 ADS 300x250
            
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Podcast
          ul(class="list-reset mb-4")
            li(v-for='radio in radios' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='radio.title' :imgUrl='radio.img' :rank='radio.rank'/>
          div(class="ads300x600")
            h2 ADS 300x600
        // Center
        div(class=" w-3/4 border-l")
          div(class="mx-auto max-w-lg")
            ul(class="list-reset")
              li(v-for='post in news')
                <NewsCard :title='post.title' :imgUrl="post.urlToImage" :date='post.publishedAt' :preview='post.description'/>


</template>


<script>

import axios from 'axios';

import TopHighlights from '../Components/TopHighlights.vue';
import NewsCard from '../Components/NewsCard.vue';
import NewsListSmall from '../Components/NewsListSmall.vue';

export default {
  name: 'News',
  components: {
    TopHighlights,
    NewsCard,
    NewsListSmall
  },

  data: function() {
    return {
      news: null,

      radios: [
        {
          title: 'Menghukum Anak = Mendidik Anak?',
          img: 'https://i1.sndcdn.com/artworks-000237224448-vimodn-t500x500.jpg'
        },
        {
          title: 'Stand Up Speak Up - Melawan Rokok',
          img: 'https://i1.sndcdn.com/artworks-000237860498-916i9x-t200x200.jpg'
        },
        {
          title: 'Miss KBR - Ke Mana Muara Kasus Novel',
          img: 'https://i1.sndcdn.com/artworks-000316993992-g4zq01-t200x200.jpg'
        },
        {
          title: 'Miss KBR - Indonesia jadi tuan rumah piala dunia 2022',
          img: 'https://i1.sndcdn.com/artworks-000316993992-g4zq01-t200x200.jpg'
        },
        {
          title: 'Sains sekitar kita - Vol.1 Jatuh Cinta',
          img: 'https://i1.sndcdn.com/artworks-000316993653-ox8c1h-t200x200.jpg'
        },
        {
          title: 'Volume 20: Gangguan Tidur dan Dampak yang Ditimbulkan',
          img: 'https://i1.sndcdn.com/artworks-000380060493-nwux6w-t200x200.jpg'
        },
      ],

      tops: [
        {
          name: 'Gunakan Helikopter, Tim SAR Evakuasi Jenazah Pendaki Korban Gempa di Gunung Rinjani',
          imgUrl : "https://source.unsplash.com/480x320/?plane",
          linkUrl : "#"
        },
        {
          name: 'Divonis Organisasi Terlarang, Jamaah Ansharut Daulah Enggan Banding',
          imgUrl : "https://source.unsplash.com/480x320/?court",
          linkUrl : "#"
        },
        {
          name: 'Vonis Anak Korban Perkosaan di Jambi, Hakim Dilaporkan ke KY',
          imgUrl : "https://source.unsplash.com/480x320/?girl",
          linkUrl : "#"
        }
      ],

      popular: [
        {
          name: 'Bawaslu Rekomendasikan Pemungutan Suara Ulang, KPU: Logistik 91 TPS Sudah Siap',
          imgUrl : "https://source.unsplash.com/128x128/?people,nature",
          linkUrl : "#",
          rank: '1'
        },
        {
          name: 'Bawaslu Jateng Temukan Pelanggaran Pilkada di 15 Kabupaten/Kota',
          imgUrl : "https://source.unsplash.com/128x128/?car",
          linkUrl : "#",
          rank: '2'
        },
        {
          name: 'Tersangka KPK Memenangi Pilkada, Kemendagri: Tunggu Hasil Resmi KPU',
          imgUrl : "https://source.unsplash.com/128x128/?politics",
          linkUrl : "#",
          rank: '3'
        },
        {
          name: 'Ini Alasan BPBD Banyuwangi Minta Perpanjang Status Tanggap Darurat Banjir Bandang',
          imgUrl : "https://source.unsplash.com/128x128/?race",
          linkUrl : "#",
          rank: '4'
        },
        {
          name: 'Setahun Terakhir, Kontras Catat Polisi dan TNI Jadi Pelaku Terbanyak Kasus Penyiksaan',
          imgUrl : "https://source.unsplash.com/128x128/?art",
          linkUrl : "#",
          rank: '5'
        }
      ]
    }
  },

   mounted: function() {
    return (
      axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=146da8fcb8414baeaac8f8cb789f92bb')
        .then(response => (this.news = response.data.articles))
    )
  }
}
</script>
