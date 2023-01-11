import { createApp } from 'vue'
import carBooking from './CarBooking.vue'
import { createPinia } from 'pinia'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp, faHouse, faCar, faUsers, faGear, faGasPump, faCarSide, faVanShuttle, faTruckPickup, faTruck, faUser, faPhone, faEnvelope, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add( faFacebook, faLine, faInstagram, faArrowUp, faHouse, faCar, faUsers, faGear, faGasPump, faCarSide, faVanShuttle, faTruckPickup, faTruck, faUser, faPhone, faEnvelope, faLocationDot, faXmark )

createApp(carBooking)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#carBooking')