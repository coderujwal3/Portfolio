import { Links, Meta, Outlet, Scripts } from "react-router";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SEO from "./components/SEO.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ujwalsingh.tech/#person",
      name: "Ujwal Singh",
      url: "https://ujwalsingh.tech/",
      image: "https://ujwalsingh.tech/ujwal.png",
      jobTitle: "AI/ML Engineering Student and Developer",
      description:
        "Ujwal Singh is an Artificial Intelligence and Machine Learning engineering student and developer interested in full-stack development, cybersecurity, and digital forensics.",
      sameAs: [
        "https://github.com/coderujwal3",
        "https://www.youtube.com/@Nthree3",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ujwalsingh.tech/#website",
      url: "https://ujwalsingh.tech/",
      name: "Ujwal Singh",
      description:
        "Official portfolio of Ujwal Singh, featuring engineering projects, technical skills, experience, and credentials.",
      publisher: { "@id": "https://ujwalsingh.tech/#person" },
      inLanguage: "en-IN",
    },
  ],
};

export function Layout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-26 max-[720px]:scroll-pt-21 scheme:light dark:scheme:dark motion-reduce:scroll-auto"
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KRW62C62"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KRW62C62"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments)} gtag('js', new Date());",
          }}
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#e8edf4" />
        <meta
          name="description"
          content="Ujwal Singh is an AI and Machine Learning engineering student, full-stack developer, and cybersecurity enthusiast in India. Explore his projects in AI, web development, digital forensics, and security."
        />
        <meta name="author" content="Ujwal Singh" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large"
        />
        <link rel="canonical" href="https://ujwalsingh.tech/" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Ujwal Singh" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ujwalsingh.tech/" />
        <meta
          property="og:title"
          content="Ujwal Singh | AI/ML, Full-Stack Developer &amp; Cybersecurity"
        />
        <meta
          property="og:description"
          content="Explore Ujwal Singh's engineering portfolio, open-source projects, skills, experience, and work across AI/ML, full-stack development, and cybersecurity."
        />
        <meta property="og:image" content="https://ujwalsingh.tech/ujwal.png" />
        <meta
          property="og:image:alt"
          content="Portrait of Ujwal Singh — AI/ML engineering student and developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ujwal Singh | Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="AI/ML, full-stack development, cybersecurity, and digital forensics."
        />
        <meta
          name="twitter:image"
          content="https://ujwalsingh.tech/ujwal.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <title>
          Ujwal Singh | AI/ML, Full-Stack Developer &amp; Cybersecurity
        </title>
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="m-0 min-w-[320px] bg-[#e8edf4] font-manrope text-[#273248] antialiased [font-optical-sizing:auto] [font-synthesis:none] [text-rendering:optimizeLegibility] selection:bg-[#5268d9] selection:text-white transition-colors duration-[250ms] dark:bg-[#202631] dark:text-[#e8edf8]">
        {children}
        <noscript>
          <main>
            <h1>
              Ujwal Singh — AI/ML Engineering Student, Full-Stack Developer
              &amp; Cybersecurity Enthusiast
            </h1>
            <p>
              Welcome to the official portfolio of Ujwal Singh, a B.Tech
              Artificial Intelligence and Machine Learning engineering student
              at Kashi Institute of Technology, affiliated with Dr. A.P.J. Abdul
              Kalam Technical University in India.
            </p>
            <p>
              Ujwal builds software across full-stack web development, applied
              machine learning, Python tooling, cybersecurity, and digital
              forensics. Explore his engineering projects, technical skills,
              internships, credentials, and professional contact information.
            </p>
            <nav aria-label="Portfolio pages">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Ujwal</a>
                </li>
                <li>
                  <a href="/skills">Technical skills</a>
                </li>
                <li>
                  <a href="/experience">Experience and credentials</a>
                </li>
                <li>
                  <a href="/projects">Engineering projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </main>
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SEO />
      <Outlet />
    </>
  );
}
