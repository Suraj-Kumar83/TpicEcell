import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Discover from './Pages/Discover/Discover.jsx'
import MissionAndVision from "./Pages/Discover/MissionAndVision.jsx"
import Nodes from "./Pages/Discover/Nodes.jsx"
import Culture from "./Pages/Discover/Culture.jsx"
import ThrustAreas from "./Pages/Discover/ThrustAreas.jsx"
import PartnersAndCollaborators from "./Pages/Discover/PartnersAndCollaborators.jsx"
import Initiatives from './Pages/Initiatives/Initiatives.jsx'
import Learn from './Pages/Learn/Learn.jsx'
import Blogs from './Pages/Learn/Blogs.jsx'
import Newsletter from './Pages/Learn/Newsletter.jsx'
import StartUpGuide from './Pages/Learn/StartUpGuide.jsx'
import Incubators from './Pages/Learn/Incubators.jsx'
import Events from './Pages/Events/Events.jsx'
import Team from './Pages/Team/Team.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Connect from './Pages/Connect/Connect.jsx'
import AdminLogin from './Pages/AdminLogin/AdminLogin.jsx'
import DiscoverPage from './components/important/DiscoverPage.jsx'
import AddEvent from './Pages/Events/AddEvent.jsx'
import EditEvent from './Pages/Events/EditEvent.jsx'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const AppWithAuth = () => (
  <AuthProvider>
    <Layout />
  </AuthProvider>
)

const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppWithAuth />,
    children: [
      { path: '', element: <Home /> },
      {
        path: 'discover',
        element: <Discover />,
        children: [
          { path: 'who-we-are', element: <DiscoverPage /> },
          { path: 'mission-and-vision', element: <MissionAndVision /> },
          { path: 'culture', element: <Culture /> },
          { path: 'thrust-areas', element: <ThrustAreas /> },
          { path: 'nodes', element: <Nodes /> },
          { path: 'partners-and-collaborators', element: <PartnersAndCollaborators /> },
        ],
      },
      { path: 'initiatives', element: <Initiatives /> },
      {
        path: 'learn',
        element: <Learn />,
        children: [
          { path: 'blogs', element: <Blogs /> },
          { path: 'newsletter', element: <Newsletter /> },
          { path: 'startup-guide', element: <StartUpGuide /> },
          { path: 'incubators', element: <Incubators /> },
        ],
      },
      { path: 'events', element: <Events /> },
      { path: 'team', element: <Team /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'connect', element: <Connect /> },
      { path: 'admin-login', element: <AdminLogin /> },
      {
        path: 'add-event',
        element: (
          <ProtectedRoute>
            <AddEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: 'edit-event/:id',
        element: (
          <ProtectedRoute>
            <EditEvent />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
