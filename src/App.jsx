import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Solution from "./pages/Solution";
import Architecture from "./pages/Architecture";
import PakistanCountry from "./pages/Host/PakistanCountry";
import RootLayout from "./layouts/RootLayout";
import KosovoCountry from "./pages/Host/KosovoCountry";
import GermanyCountry from "./pages/Host/GermanyCountry";
import ProjectRoads from "./pages/Details/ProjectRoads";

import ProjectStacion from "./pages/Details/ProjectStacion";
import ProjectBridge from "./pages/Details/ProjectBridge";
import ProjectBadTotz from "./pages/Details/ProjectBadTotz";
import ProjectRenderat from "./pages/Details/ProjectRenderat";
import ProjectInfrastructure from "./pages/Details/ProjectInfrastructure";
import PageNotFound from "./pages/PageNotFound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="project">
        <Route path="project" element={<RootLayout />} />
        <Route index element={<Project />} />
        <Route path="projectRoads" element={<ProjectRoads />} />

        <Route path="projectStacion" element={<ProjectStacion />} />
        <Route path="projectBridge" element={<ProjectBridge />} />
        <Route path="projectBadTotz" element={<ProjectBadTotz />} />
        <Route path="projectRenderat" element={<ProjectRenderat />} />
        <Route
          path="projectInfrastructure"
          element={<ProjectInfrastructure />}
        />
      </Route>
      <Route path="architecture" element={<Architecture />} />
      <Route path="solution" element={<Solution />} />
      <Route path="kosovo" element={<KosovoCountry />} />
      <Route path="germany" element={<GermanyCountry />} />
      <Route path="pakistan" element={<PakistanCountry />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
