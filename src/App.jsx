import React, {useEffect, useState, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import {SET_MENU_ITEMS, SET_USER_INFO, useAppContext} from './context/app';
import Page from "./views/Page/Page";
import PageService from "./service/page";
import Loader from "./components/Loader";
import Login from "./views/User/Login";
import UserService from "./service/user";
import EditPage from "./views/Page/EditPage";
import i18n from "./utils/i18n";
import CreateArticle from "./views/Article/CreateArticle";
import EditArticle from "./views/Article/EditArticle";
import Article from "./views/Article/Article";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import ForgotPassword from "./views/User/ForgotPassword";
import ForgotPasswordSuccess from "./views/User/ForgotPasswordSuccess";
import ResetPassword from "./views/User/ResetPassword";
import Upload from "./views/Gallery/Upload";
import GalleryService from "./service/gallery";
import CreateUploadCategory from "./views/Gallery/CreateUploadCategory";
import CategoryList from "./views/Gallery/CategoryList";
import CategoryUploads from "./views/Gallery/CategoryUploads";
import CreateSubPage from "./views/Page/CreateSubPage";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Announcement from "./components/Announcement/Announcement";
import CreateAnnouncement from "./views/Announcement/CreateAnnouncement";
import AnnouncementService from "./service/announcement";
import UploadService from "./service/upload";
import Links from "./views/Links";
import {MASS_TYPE, NOTICE_TYPE, READINGS_TYPE} from "./api/upload";

const Most = lazy(() => import('./views/Most/Most'));
const ArchiveMost = lazy(() => import('./views/Most/Archiv'));
const DetailMost = lazy(() => import('./views/Most/Detail'));
const UploadMost = lazy(() => import('./views/Most/Upload'));
const ArchiveNotice = lazy(() => import('./views/Notice/Archive'));
const DetailNotice = lazy(() => import('./views/Notice/Detail'));
const Notice = lazy(() => import('./views/Notice/Notice'));
const UploadNotice = lazy(() => import('./views/Notice/Upload'));

function loadMenuItems(pageService, menuItems) {
  if (menuItems.length === 0) {
    return pageService.getPagesByCategory("menu")
  }
  return Promise.resolve(menuItems)
}

function App({pageService, userService, articleService}) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const {dispatch, state} = useAppContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.user == null && state.token != null && state.menuItems.length) {
      setLoading(true);
      userService.userInfo().then((userInfo) => {
        loadMenuItems(pageService, state.menuItems).then((response) => {
          dispatch({type: SET_MENU_ITEMS, value: response})
          dispatch({type: SET_USER_INFO, value: userInfo})
          setLoading(false);
        });
      });
    } else {
      setLoading(true);
      loadMenuItems(pageService, state.menuItems).then((response) => {
        dispatch({type: SET_MENU_ITEMS, value: response})
        setLoading(false);
      })
    }

  }, [dispatch, pageService, state.menuItems, state.user, state.token, userService]);

  useEffect(() => {
    document.title = `${state.title} | Farnosť Šaca`
  }, [state.title]);

  let menuClass = "w-full lg:block px-6 flex-grow lg:flex lg:items-end lg:w-auto ";

  menuClass += show ? "block" : "hidden"
  let menuList = [];

  if (state.menuItems.length) {
    menuList = state.menuItems.map((menuItem) => {
      return (
        <li className="lg:mr-4 block lg:inline-block" key={`page-${menuItem.id}`}>
          <NavLink to={`/pages/menu/${menuItem.slug}`}
                   className="lg:mt-0 hover:text-blue-800">
            {menuItem.title}
          </NavLink>
        </li>
      )
    })
  }

  let dropDownClass = 'absolute dropdown mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-left'

  if (!open) {
    dropDownClass += ' hidden';
  }

  const topPadding = state.announcement ? 'pt-40' : 'pt-24';
  return !loading ? (
    <Router>
      <div>
        <div className="fixed z-50 shadow-md bg-white w-full main-menu">
          <nav className="flex items-center justify-between flex-wrap py-8">
            <div className="block lg:hidden ml-4">
              <button onClick={() => setShow(!show)}
                      className="flex items-center px-3 py-2 border rounded border-white hover:text-blue-800">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div className="flex lg:ml-4 px-6 items-center mr-4">
              <span className="text-blue-800 text-shadow text-2xl font-bold ml-4">Farnosť Šaca</span>
            </div>
            <div className={menuClass}>
              <ul className="text-sm lg:flex-grow text-center lg:text-right ">
                <li className="lg:mr-4 block lg:inline-block">
                  <NavLink to="/" exact
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.home.menuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:inline-block hidden lg:inline-block">
                  <NavLink to="/oznamy/" onClick={e => {
                    e.preventDefault()
                    setOpen(true)
                  }} onBlur={() => setTimeout(() => setOpen(false), 200)}
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.notice.menuName")}</NavLink>
                  <div className={dropDownClass}>
                    <Link to="/oznamy/weekly"
                          className="block px-4 py-2 hover:text-blue-800 hover:text-white">{i18n.t("pages.notice.menuName")}</Link>
                    <Link to="/oznamy/omse"
                          className="block px-4 py-2 hover:text-blue-800 hover:text-white">{i18n.t("pages.notice.massMenuName")}</Link>
                    <Link to="/oznamy/citania"
                          className="block px-4 py-2 hover:text-blue-800 hover:text-white">{i18n.t("pages.notice.readingsMenuName")}</Link>
                  </div>
                </li>
                <li className="lg:mr-4 block lg:hidden">
                  <NavLink to="/oznamy/weekly"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.notice.menuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:hidden">
                  <NavLink to="/oznamy/omse"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.notice.massMenuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:hidden">
                  <NavLink to="/oznamy/citania"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.notice.readingsMenuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:inline-block">
                  <NavLink to="/most"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.most.menuName")}</NavLink>
                </li>
                {menuList}
                <li className="lg:mr-4 block lg:inline-block">
                  <NavLink to="/links"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.links.menuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:inline-block">
                  <NavLink to="/gallery"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.gallery.menuName")}</NavLink>
                </li>
                <li className="lg:mr-4 block lg:inline-block">
                  <NavLink to="/contact"
                           className="lg:mt-0 hover:text-blue-800">{i18n.t("pages.contact.menuName")}</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Announcement announcement={state.announcement}/>
        </div>
        <div className={`${topPadding} main-content-wrapper mx-auto`}>
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route exact path="/">
                <Home articleService={articleService}/>
              </Route>


              <ProtectedRoute neededPerm="notLogged" path="/login">
                <Login userService={UserService}/>
              </ProtectedRoute>
              <ProtectedRoute neededPerm="notLogged" path="/forgot-password/success">
                <ForgotPasswordSuccess userService={UserService}/>
              </ProtectedRoute>
              <ProtectedRoute neededPerm="notLogged" path="/forgot-password">
                <ForgotPassword userService={UserService}/>
              </ProtectedRoute>
              <ProtectedRoute neededPerm="notLogged" path="/reset-password">
                <ResetPassword userService={UserService}/>
              </ProtectedRoute>


              <ProtectedRoute neededPerm="editor" path="/articles/create">
                <CreateArticle articleService={articleService}/>
              </ProtectedRoute>
              <ProtectedRoute neededPerm="editor" path="/articles/:slug/edit">
                <EditArticle articleService={articleService}/>
              </ProtectedRoute>
              <Route path="/articles/:slug">
                <Article articleService={articleService}/>
              </Route>

              <Route path={`/oznamy/upload/:type(${NOTICE_TYPE}|${READINGS_TYPE}|${MASS_TYPE})`}>
                <UploadNotice uploadService={UploadService}/>
              </Route>
              <Route path={`/oznamy/:type(${NOTICE_TYPE}|${READINGS_TYPE}|${MASS_TYPE})/archive`}>
                <ArchiveNotice uploadService={UploadService}/>
              </Route>
              <Route path={`/oznamy/:type(${NOTICE_TYPE}|${READINGS_TYPE}|${MASS_TYPE})/:id`}>
                <DetailNotice uploadService={UploadService}/>
              </Route>

              <Route path={`/oznamy/:type(${NOTICE_TYPE}|${READINGS_TYPE}|${MASS_TYPE})`}>
                <Notice/>
              </Route>


              <Route path="/most/archive">
                <ArchiveMost uploadService={UploadService}/>
              </Route>
              <ProtectedRoute path="/most/upload" neededPerm="editor">
                <UploadMost uploadService={UploadService}/>
              </ProtectedRoute>
              <Route path="/most/:id">
                <DetailMost uploadService={UploadService}/>
              </Route>
              <Route path="/most">
                <Most/>
              </Route>

              <ProtectedRoute path="/announcement/create" neededPerm="editor">
                <CreateAnnouncement announcementService={AnnouncementService}/>
              </ProtectedRoute>


              <ProtectedRoute neededPerm="editor" path="/pages/:category/:slug/edit">
                <EditPage pageService={PageService}/>
              </ProtectedRoute>
              <ProtectedRoute neededPerm="editor" path="/pages/:category/:id/create">
                <CreateSubPage pageService={PageService}/>
              </ProtectedRoute>

              <Route path="/pages/:category/:parent_slug/:slug">
                <Page pageService={PageService}/>
              </Route>
              <Route path="/pages/:category/:parent_slug">
                <Page pageService={PageService}/>
              </Route>

              <ProtectedRoute neededPerm="editor" path="/gallery/:category/upload">
                <Upload uploadService={UploadService}/>
              </ProtectedRoute>

              <ProtectedRoute neededPerm="editor" path="/gallery/create">
                <CreateUploadCategory galleryService={GalleryService}/>
              </ProtectedRoute>

              <Route path="/gallery/:category">
                <CategoryUploads galleryService={GalleryService}/>
              </Route>

              <Route path="/gallery">
                <CategoryList galleryService={GalleryService}/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/links">
                <Links/>
              </Route>

              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Suspense>
        </div>
        <div className="text-center">
          <p className="text-gray-800 py-8">
            {(new Date()).getFullYear()} © Farnosť Šaca
          </p>
        </div>
      </div>
    </Router>
  ) : <Loader/>;
}

export default App;
