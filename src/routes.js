import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/SiteLayout.jsx", [
    index("pages/HomePage.jsx"),
    route("about", "pages/AboutPage.jsx"),
    route("skills", "pages/SkillsPage.jsx"),
    route("experience", "pages/ExperiencePage.jsx"),
    route("projects", "pages/ProjectsPage.jsx"),
    route("contact", "pages/ContactPage.jsx"),
    route("*", "pages/NotFoundPage.jsx"),
  ]),
];