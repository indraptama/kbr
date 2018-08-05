<template lang="pug">
  div
    header(class="MainHeader")
      nav(class="mx-auto flex items-center justify-end px-4 bg-primary")
        a(href="#" class="inline-block py-2 px-4 no-underline text-white hover:text-black uppercase text-sm fira font-normal") About Us
        a(href="#" class="inline-block py-2 px-4 no-underline text-white hover:text-black uppercase text-sm fira font-normal") Pedoman Media Siber
        a(href="#" class="inline-block py-2 px-4 no-underline text-white hover:text-black uppercase text-sm fira font-normal") Jaringan
        a(href="#" class="inline-block py-2 px-4 no-underline text-white hover:text-black uppercase text-sm fira font-normal") Contact Us
        a(href="#" class="inline-block py-2 px-4 no-underline text-white hover:text-black uppercase text-sm fira font-normal")
          i(class="icon icon-soundcloud")
        a(href="#" class="inline-block py-2 px-3 no-underline text-white hover:text-black uppercase text-sm fira font-normal")
          i(class="icon icon-facebook")
        a(href="#" class="inline-block py-2 px-3 no-underline text-white hover:text-black uppercase text-sm fira font-normal")
          i(class="icon icon-twitter")
        a(href="#" class="inline-block py-2 px-3 no-underline text-white hover:text-black uppercase text-sm fira font-normal")
          i(class="icon icon-instagram")
        a(href="#" class="inline-block py-2 px-3 no-underline text-white hover:text-black uppercase text-sm fira font-normal")
          i(class="icon icon-youtube")
      
      div(class="max-w-4xl mx-auto px-4 lg:px-0 flex items-center justify-between")
        div
          <router-link to='/'>
            img(src="../Assets/logo.png" class="block w-32")
        div
          img(src="../Assets/ads-long.png" class="block")
      
      nav(class="MainNav mx-auto flex items-center justify-center border-t border-b bg-white px-4")
        <router-link to="/news" class="inline-block py-2 px-4 no-underline text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal"> Berita </router-link>
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Saga
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Ind<span class="text-red font-normal">one</span>sia 2019
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Asia Calling
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Kbr Prime
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Ruang Publik
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Kabar Bisnis
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Opini
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Gallery
        a(href="#" class="inline-block py-2 px-4 no-underline border-l text-grey-dark hover:text-black uppercase xl:text-lg fira font-normal") Search

</template>

<script>
  
  export default {
    name: 'MainHeader'
  }
</script>
