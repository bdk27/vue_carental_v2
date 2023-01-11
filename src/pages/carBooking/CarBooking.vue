<template>
    <BookingNav></BookingNav>
    <BookingForm></BookingForm>
    <BookingFooter></BookingFooter>
    <DotLink></DotLink>
</template>

<script>
    import BookingNav from './components/BookingNav'
    import BookingForm from './components/BookingForm'
    import BookingFooter from './components/BookingFooter'
    import DotLink from './components/DotLink'

    export default {
        name: 'CarBooking',
        components: {
            BookingNav,
            BookingForm,
            BookingFooter,
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