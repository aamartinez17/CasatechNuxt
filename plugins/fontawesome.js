// plugins/fontawesome.js
import { library, config} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// 1. Import Solid Icons
import { 
  faPhone, 
  faBars, 
  faTimes, 
  faLaptopCode, 
  faFolderOpen, 
  faUser, 
  faBookOpen, 
  faPalette,
  faArrowRight,
  faBullseye, 
  faArrowUpRightFromSquare, 
  faLink,
  faCubes, 
  faChevronRight, 
  faSpinner,
  faArrowsLeftRight, 
  faCalendarCheck, 
  faScissors, 
  faClock, 
  faWandMagicSparkles, 
  faStar, 
  faUtensils, 
  faPizzaSlice, 
  faWineGlass, 
  faMugHot, 
  faPlateWheat,
  faNetworkWired, 
  faShieldHalved, 
  faChartPie, 
  faServer, 
  faSitemap,
  faUserTie, 
  faGavel, 
  faHouseChimney, 
  faHeartPulse, 
  faCertificate,
  faBagShopping, 
  faCartShopping, 
  faCreditCard, 
  faTags, 
  faTruckFast
} from '@fortawesome/free-solid-svg-icons'

// 2. Import Brand Icons
import { 
  faInstagram, 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faGithub, 
  faYoutube, 
  faTiktok 
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false,

library.add(
  faPhone, faBars, faTimes, faLaptopCode, faFolderOpen, faUser, faBookOpen, faPalette,
  faArrowRight, faBullseye, faArrowUpRightFromSquare, faLink, faCubes, faChevronRight,
  faSpinner, faArrowsLeftRight, faCalendarCheck, faScissors, faClock, faWandMagicSparkles,
  faStar, faUtensils, faPizzaSlice, faWineGlass, faMugHot, faPlateWheat, faNetworkWired,
  faShieldHalved, faChartPie, faServer, faSitemap, faUserTie, faGavel, faHouseChimney,
  faHeartPulse, faCertificate, faBagShopping, faCartShopping, faCreditCard, faTags, faTruckFast,
  
  faInstagram, faFacebook, faTwitter, faLinkedin, faGithub, faYoutube, faTiktok
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})