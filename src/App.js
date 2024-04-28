import { Routes, BrowserRouter, Route } from "react-router-dom";
import FeedPrincipal from "./pages/Feed";
import Register from "./pages/Register";
import Layout from "./auxiliar/Layout";
import Profile from "./pages/Profile";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Layout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed/:userId" element={<FeedPrincipal />} />
        </Routes>
        <Routes>
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
