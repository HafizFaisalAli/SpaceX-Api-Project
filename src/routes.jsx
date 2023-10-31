import { createBrowserRouter } from "react-router-dom";
import {SLDetails,SLPage,ShipsDetails,ShipsPage,RocketsDetails,RocketsPage,RoadsterInfoPage,PayloadsDetails,PayloadsPage,LaunchpadsDetails,LaunchpadsPage,LaunchesDetails,LaunchesPage,LandpadsDetails,LandpadsPage,DragonsDetails,DragonsPage,CrewDetails,CrewPage,CoresDetails,CoresPage,CompanyInfoPage,CapsulesDetails,CapsulesPage,HomePage} from './Pages/PagesExport'

const routes = createBrowserRouter([
    {
       path: '/',
       element: <HomePage />
    },
    {
       path: '/capsules',
       element: <CapsulesPage />
    },
    {
       path: '/capsules/:id',
       element: <CapsulesDetails />
    },
    {
       path: '/company',
       element: <CompanyInfoPage />
    },
    {
       path: '/cores',
       element: <CoresPage />
    },
    {
       path: '/cores/:id',
       element: <CoresDetails />
    },
    {
       path: '/crew',
       element: <CrewPage />
    },
    {
       path: '/crew/:id',
       element: <CrewDetails />
    },
    {
       path: '/dragons',
       element: <DragonsPage />
    },
    {
       path: '/dragons/:id',
       element: <DragonsDetails />
    },
    {
       path: '/landpads',
       element: <LandpadsPage />
    },
    {
       path: '/landpads/:id',
       element: <LandpadsDetails />
    },
    {
       path: '/launches',
       element: <LaunchesPage />
    },
    {
       path: '/launches/:id',
       element: <LaunchesDetails />
    },
    {
       path: '/launchpads',
       element: <LaunchpadsPage />
    },
    {
       path: '/launchpads/:id',
       element: <LaunchpadsDetails />
    },
    {
       path: '/payloads',
       element: <PayloadsPage />
    },
    {
       path: '/payloads/:id',
       element: <PayloadsDetails />
    },
    {
       path: '/roadster',
       element: <RoadsterInfoPage />
    },
    {
       path: '/rockets',
       element: <RocketsPage />
    },
    {
       path: '/rockets/:id',
       element: <RocketsDetails />
    },
    {
       path: '/ships',
       element: <ShipsPage />
    },
    {
       path: '/ships/:id',
       element: <ShipsDetails />
    },
    {
       path: '/starlink',
       element: <SLPage />
    },
    {
       path: '/starlink/:id',
       element: <SLDetails />
    },
])

export default routes;