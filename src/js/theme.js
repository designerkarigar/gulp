import { docReady } from './utils';
import preloaderInit from './preloader';
import initMap from './googleMap';
import swiperInit from './swiper';
import tooltipInit from './tooltip';
import popoverInit from './popover';
import rellaxInit from './rellax';
import countupInit from './countup';
import isotopeInit from './isotope';
import bigPictureInit from './bigPicture';
import bgPlayerInit from './bg-player';
import navbarInit from './navbar';
import offcanvasInit from './offcanvas';
import formInit from './form-processor';
import detectorInit from './detector';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(preloaderInit);
docReady(initMap);
docReady(tooltipInit);
docReady(popoverInit);
docReady(offcanvasInit);
docReady(rellaxInit);
docReady(countupInit);
docReady(isotopeInit);
docReady(bigPictureInit);
docReady(navbarInit);
docReady(bgPlayerInit);
docReady(swiperInit);
docReady(formInit);
docReady(initializeApp);
docReady(getFirestore);
