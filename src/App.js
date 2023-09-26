import {Loginf} from "./pages/loginpage"
import { Signupf } from './pages/signuppage';
import { TriSpinner } from './utils/loader';
import { Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import MainHomef from "./pages/indexpage";
import MainSection from './components/homepage/mainsection';
import { Suspense, lazy } from 'react';
const ProfilePage = lazy(() => import("./pages/profilepage"));
const MypostSection = lazy(() => import("./components/profile/mypost"))
const DetailsSection = lazy(() => import("./components/profile/detailsection"))
const FilteredCat = lazy(() => import("./pages/categorypage"))
const PostDetails = lazy(() => import("./components/postdesc/postdetails"))
const SearchResult = lazy(() => import("./pages/searchpage"))
const MycartPage = lazy(() => import("./pages/wishlistpage"))
const Settingspage = lazy(() => import("./pages/settingspage"))

function App() {
  return (
      <CookiesProvider>
        <Suspense fallback={<TriSpinner />}>
          <Routes>
            <Route path="/" element={<Loginf />} />
            <Route path="/signup" element={<Signupf />} />
            <Route path="/index-page" element={<MainHomef />} >
              <Route index element={<MainSection />} />
              <Route path="my-cart" element={<MycartPage />} />
              <Route path="profile" element={<ProfilePage />}>
                <Route index element={<MypostSection />} />
                <Route path="mybio" element={<DetailsSection />} />
              </Route>
              <Route path="my-cart" element={<MycartPage />} />
              <Route path="settings" element={<Settingspage />} />
              <Route path="category-page" element={<FilteredCat />} />
              <Route path=":id/:postid" element={<PostDetails />} />
              <Route path="search-result/:query" element={<SearchResult />} />
            </Route>
          </Routes>
        </Suspense>
      </CookiesProvider>
  );
}

export default App; 
