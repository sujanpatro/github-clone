import type React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutTopNav from "../components/LayoutTopNav";
import profileConfig from "../config/profileConfig.json";
import { ProfileProvider } from "../context/ProfileContext";
import PackagesPage from "../pages/PackagesPage";
import ProfilePage from "../pages/ProfilePage";
import ProjectsPage from "../pages/ProjectsPage";
import RepositoriesPage from "../pages/RepositoriesPage";
import StarPage from "../pages/StarPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <LayoutTopNav />
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/profile/${profileConfig.defaultUsername}`} replace />}
            />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/profile/:username/repositories" element={<RepositoriesPage />} />
            <Route path="/profile/:username/projects" element={<ProjectsPage />} />
            <Route path="/profile/:username/packages" element={<PackagesPage />} />
            <Route path="/profile/:username/stars" element={<StarPage />} />
            <Route
              path="*"
              element={<Navigate to={`/profile/${profileConfig.defaultUsername}`} replace />}
            />
          </Routes>
        </div>
      </ProfileProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
