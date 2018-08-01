<template lang="pug">
  div(class="")


    //- Main News
    div(class="px-4 border-t")
      div(class="flex w-full max-w-3xl mx-auto")
        
        // Left Side
        div(class="pr-4 w-1/4 pt-4")
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Trendings
          ul(class="list-reset mb-4")
            li(v-for='pop in popular' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='pop.name' :imgUrl='pop.imgUrl' :rank='pop.rank'/>
          
          div(class="bg-blue ads300x600")
            h2 ADS 300x250

        // Center
        div(class=" w-3/2 pt-4 border-l")
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?people"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?car"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?house"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?street"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?nature"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?sport,nature"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?plane"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?abstract"/>
          <NewsCard imgUrl="https://source.unsplash.com/480x320/?kids"/>
        



</template>


<script>

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
      tops: [
        {
          name: 'Gunakan Helikopter, Tim SAR Evakuasi Jenazah Pendaki Korban Gempa di Gunung Rinjani',
          imgUrl : "https://source.unsplash.com/480x320/?nature",
          linkUrl : "#"
        },
        {
          name: 'Divonis Organisasi Terlarang, Jamaah Ansharut Daulah Enggan Banding',
          imgUrl : "https://source.unsplash.com/480x320/?car",
          linkUrl : "#"
        },
        {
          name: 'Vonis Anak Korban Perkosaan di Jambi, Hakim Dilaporkan ke KY',
          imgUrl : "https://source.unsplash.com/480x320/?people",
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
  }
}
</script>
