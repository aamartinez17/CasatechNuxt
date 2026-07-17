// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import only the specific icons we need for the navbar to optimize build weight
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
  faBullseye, // <--- Add this
  faArrowUpRightFromSquare, 
  faCubes, 
  faChevronRight, 
  faSpinner,
  faArrowsLeftRight, // <--- Add this
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

// Disable adding CSS automatically
config.autoAddCss = false

// Add imported icons to library
library.add(
  faPhone, 
  faBars, 
  faTimes, 
  faLaptopCode, 
  faFolderOpen, 
  faUser, 
  faBookOpen, 
  faPalette,
  faArrowRight,
  faBullseye, // <--- Add this
  faArrowUpRightFromSquare,
  faCubes, 
  faChevronRight, 
  faSpinner,
  faArrowsLeftRight, // <--- Add this
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
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})