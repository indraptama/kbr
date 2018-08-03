<template lang="pug">
  div(class="")


    //- Main News
    div(class="px-4")
      div(class="flex flex-row-reverse w-full max-w-4xl mx-auto")
        
        // Left Side
        div(class="pl-4 w-1/4 pt-4")
          div(class="bg-blue ads300x250 mb-4")
            h2 ADS 300x250
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Trendings
          ul(class="list-reset mb-4")
            li(v-for='pop in popular' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='pop.name' :imgUrl='pop.imgUrl' :rank='pop.rank'/>
          
          
            
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Radios
          ul(class="list-reset mb-4")
            li(v-for='radio in radios' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='radio.title' :imgUrl='radio.img' :rank='radio.rank'/>
          div(class="ads300x600")
            h2 ADS 300x600
        
        // Center
        div(class=" w-3/4 border-r pt-4")
          div(class="leading-normal")
            h1.mb-4.text-5xl.leading-tight Why it matters that EA censored Colin Kaepernick's name in a 'Madden NFL 19' song
          div(class="mx-auto max-w-lg leading-normal flex")
            div(class="w-1/5 ml-4")
              p dedededed
            div(class="w-4/5")
              p Hollywood has what we like to call dump months. These are the couple of times a year where studios toss the movies they don’t think are going to do well at the box office. January is the biggest one, since no one can afford to do jack after the holidays, but August is the summer dump. Still, we’ve seen some great (and greatly terrible) movies come out of this ghost town of a month, like the upcoming film The Darkest Minds. Here are our picks for August films that clawed their way out of the garbage.

</template>


<script>

import axios from 'axios';

import TopHighlights from '../Components/TopHighlights.vue';
import NewsCard from '../Components/NewsCard.vue';
import NewsListSmall from '../Components/NewsListSmall.vue';

export default {
  name: 'NewsSingle',
  components: {
    TopHighlights,
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
}
</script>
