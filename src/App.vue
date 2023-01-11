<template>
  <CARentNav></CARentNav>
  <CARentHome></CARentHome>
  <CARentIntro></CARentIntro>
  <CARentBanner></CARentBanner>
  <CARentServe></CARentServe>
  <CARentNews></CARentNews>
  <CARentFooter></CARentFooter>
  <DotLink></DotLink>
</template>

<script>
  import CARentNav from './components/CARentNav';
  import CARentHome from './components/CARentHome';
  import CARentIntro from './components/CARentIntro';
  import CARentBanner from './components/CARentBanner';
  import CARentServe from './components/CARentServe';
  import CARentNews from './components/CARentNews';
  import CARentFooter from './components/CARentFooter';
  import DotLink from './components/DotLink';
  import 'animate.css';

  export default {
    name: 'App',
    components: {
      CARentNav,
      CARentHome,
      CARentIntro,
      CARentBanner,
      CARentServe,
      CARentNews,
      CARentFooter,
      DotLink
    }
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans TC', sans-serif;
      overflow-x: hidden;
    }
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    section {
      padding: 5rem 0;
    }
    h1, h2, h3, h4, h5, p {
      overflow-y: hidden;
    }

</style>
