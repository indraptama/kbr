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
          
          
            
          h2(class="text-base mb-4 uppercase tracking-wide text-white text-center bg-primary p-2") Podcast
          ul(class="list-reset mb-4")
            li(v-for='radio in radios' class="mb-2 pb-2 border-b")
              <NewsListSmall :title='radio.title' :imgUrl='radio.img' :rank='radio.rank'/>
          
        
        // Center
        div(class=" w-3/4 border-r pt-16")
          div(class="leading-normal mb-4")
            h1(class='text-5xl leading-tight font-medium') Bertemu Luhut, IMF Yakin Bali Aman untuk Annual Meeting
          div(class="flex mb-8")
            div(class="flex items-center")
              div(class="rounded-full w-8 bg-red h-8")
              div(class="px-4 mr-4 border-r")
                h5(class="font-normal text-grey-darker text-lg") Rio Tuasikal
              div
                h5(class="font-normal text-grey-darker text-lg") Jumat, 03 Agus 2018 16:02 WIB
          div(class="w-full mb-8")
            div(class="Ratio Ratio--16x9 mb-4")
              div(class="RatioContent bg-center bg-cover bg-red" style="background-image:url('https://source.unsplash.com/800x600/?bali')")
            div(class="w-3/4 leading-normal text-2xl")
              p International Monetary Fund (IMF) tidak khawatir masalah keamanan dalam pertemuan tahunan IMF dan Bank Dunia (World Bank) Oktober mendatang.
          div(class="mx-auto flex")
            div(class="w-1/4 mr-4")
              h4(class="text-lg mb-4") Artikel Terkait
              ul(class="list-reset mb-4")      
                li(class="py-3 border-b font-medium") Persiapan Rapat Tahunan IMF-Bank Dunia Sudah 85 Persen
                li(class="py-3 border-b font-medium") Lawan PSMS, Dua Pemain Naturalisasi Indonesia Milik Bali United Absen
                li(class="py-3 border-b font-medium") Sediakan Hadiah Sepeda, Pegawai KPK Sindir Jokowi soal Kasus Novel?
                li(class="py-3 border-b font-medium") Energi Tambahan itu Bernama Novel
                li(class="py-3 border-b font-medium") DPRD Balikpapan Godok Perda Khusus untuk Korban Longsor
              div(class="ads300x600")
                h2 ADS 300x600

            div(class="w-3/4")
              div(class="article max-w-md mx-auto text-lg leading-normal")
                p KBR, Jakarta- International Monetary Fund (IMF) percaya Bali aman untuk pertemuan tahunan antara IMF dan Bank Dunia (World Bank) Oktober mendatang. Sekretaris Jenderal IMF Lin Jianhai mengatakan, hal itu terlihat dari persiapan-persiapan yang telah dilakukan pemerintah Indonesia di mana Menteri Koordinator Maritim Luhut Pandjaitan bertindak sebagai Ketua Panitia Nasional. Kata dia, IMF tidak khawatir masalah keamanan.
                p "Saya sangat yakin kita akan menggelar pertemuan yang sangat sukses, lancar, dan membuahkan hasil pada Oktober," terang Lin usai mengikuti rapat persiapan di gedung Kemenko Maritim, Jumat, (03/08).
                p Sebelumnya, Menko Maritim Luhut menyatakan, pihaknya telah menyiapkan seluruh aspek keamanan, dari demonstrasi sampai bencana alam. Terkait demonstrasi, telah disediakan tempat khusus bagi masyarakat atau pun kelompok sipil yang ingin unjuk rasa. Sementara terkait bencana alam, petugas telah menyiapkan berbagai antisipasi. Menurutnya, para ahli gunung berapi memprediksi Gunung Agung tidak akan erupsi selama dua hari perhelatan berlangsung.
                p "Polda Bali sudah menyiapkan segala kontigensinya. Tinggal berdoa (Gunung Agung tidak meletus), merencanakan dengan baik," jelas Luhut.
                p Pertemuan Tahunan IMF-Bank Dunia akan membahas isu keuangan dan pembangunan ekonomi se-dunia, termasuk prospek ekonomi, penghapusan kelaparan, dan dana bantuan. Indonesia ditunjuk menjadi tuan rumah untuk rapat yang digelar pada 12-14 Oktober 2018. Indonesia akan akan menerima 15 ribu orang, termasuk 3.500 delegasi dari 189 negara anggota. Tahun lalu, rapat tahunan tersebut digelar di Washington, DC, Amerika Serikat.

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
