// Pages
import HomePage from '../pages/home.f7.html';
import ShopPage from '../pages/shop.f7.html';
import TicketsPage from '../pages/tickets.f7.html';
import FansPage from '../pages/fans.f7.html';
import MatchcenterPage from '../pages/matchcenter.f7.html';
import SocialPage from '../pages/social.f7.html';
import NewsDetailPage from '../pages/news-detail.f7.html';
import AnmeldungPage from '../pages/anmeldung.f7.html';
import RegistrierenPage from '../pages/registrieren.f7.html';
import MeinProfilPage from '../pages/mein-profil.f7.html';
import WarenkorbPage from '../pages/warenkorb.f7.html';
import MeineBestellungenPage from '../pages/meine-bestellungen.f7.html';
import AusloggenPage from '../pages/ausloggen.f7.html';
import KontaktPage from '../pages/kontakt.f7.html';
import HilfePage from '../pages/hilfe.f7.html';
import DatenschutzPage from '../pages/datenschutz.f7.html';
import ImpressumPage from '../pages/impressum.f7.html';
import SpielplaenePage from '../pages/spielplaene.f7.html';
import StatistikenPage from '../pages/statistiken.f7.html';
import KaderPage from '../pages/kader.f7.html';
import YoutubelistPage from '../pages/youtubelist.f7.html';
import YoutubeDetailsPage from '../pages/youtubedetails.f7.html';
import AllvideoPage from '../pages/allvideo.f7.html';

import KalenderPage from '../pages/kalender.f7.html';
import ProductdetailsPage from '../pages/productdetails.f7.html';

import NotFoundPage from '../pages/404.f7.html';

// Header types
import HomeHeader from '../pages/home-header.f7.html';
import SubpageHeader from '../pages/subpage-header.f7.html';
import BackHeader from '../pages/back-header.f7.html';

import CartPage from '../pages/cart.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/shop/',
    component: ShopPage,
  },
  {
    path: '/productdetails/:productid',
    alias: '/productdetails/',
    component: ProductdetailsPage,
  },
  {
    path: '/tickets/',
    component: TicketsPage,
  },
  {
    path: '/fans/',
    component: FansPage,
  },
  {
    path: '/matchcenter/',
    component: MatchcenterPage,
  },
  {
    path: '/social/',
    component: SocialPage,
  },
  {
    path: '/news/details/',
    component: NewsDetailPage,
  },
  {
    path: '/anmeldung/',
    component: AnmeldungPage,
  },
  {
    path: '/registrieren/',
    component: RegistrierenPage,
  },
  {
    path: '/mein-profil/',
    component: MeinProfilPage,
  },
  {
    path: '/warenkorb/',
    component: WarenkorbPage,
  },
  {
    path: '/meine-bestellungen/',
    component: MeineBestellungenPage,
  },
  {
    path: '/ausloggen/',
    component: AusloggenPage,
  },
  {
    path: '/kontakt/',
    component: KontaktPage,
  },
  {
    path: '/hilfe/',
    component: HilfePage,
  },
  {
    path: '/datenschutz/',
    component: DatenschutzPage,
  },
  {
    path: '/impressum/',
    component: ImpressumPage,
  },
  {
    path: '/spielplaene/',
    component: SpielplaenePage,
  },
  {
    path: '/statistiken/',
    component: StatistikenPage,
  },
  {
    path: '/kader/',
    component: KaderPage,
  },
  {
    path: '/youtubelist/',

    component: YoutubelistPage,
  },
  {
    path: '/youtubedetails/:listid',
    alias: '/youtubedetails/',
    component: YoutubeDetailsPage,
  },
  {
    path: '/allvideo/',
    component: AllvideoPage,
  },
  {
    path: '/kalender/',
    component: KalenderPage,
  },
  {
    path: '/cart/',
    component: CartPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;