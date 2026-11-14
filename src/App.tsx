import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'

const MusicPage = lazy(() => import('./pages/MusicPage'))
const SongPage = lazy(() => import('./pages/SongPage'))
const LearnPage = lazy(() => import('./pages/LearnPage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'))
const ActivityPage = lazy(() => import('./pages/ActivityPage'))
const AppointedTimesPage = lazy(() => import('./pages/AppointedTimesPage'))
const AppointedTimePage = lazy(() => import('./pages/AppointedTimePage'))
const ParentsPage = lazy(() => import('./pages/ParentsPage'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FindLessonPage = lazy(() => import('./pages/FindLessonPage'))
const PlayPage = lazy(() => import('./pages/PlayPage'))
const MemoryMatchPage = lazy(() => import('./pages/MemoryMatchPage'))
const CreationOrderPage = lazy(() => import('./pages/CreationOrderPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-sun-200 border-t-sun-500" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-ink-900 px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/music/:slug" element={<SongPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/:slug" element={<LessonPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:slug" element={<ActivityPage />} />
            <Route path="/appointed-times" element={<AppointedTimesPage />} />
            <Route path="/appointed-times/:slug" element={<AppointedTimePage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/parents/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/find-a-lesson" element={<FindLessonPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/play/memory-match" element={<MemoryMatchPage />} />
            <Route path="/play/creation-order" element={<CreationOrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
