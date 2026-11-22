import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://ujwalsingh.tech';
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const pageMetadata = {
  '/': {
    title: 'Ujwal Singh | AI/ML, Full-Stack Developer & Cybersecurity',
    description:
      'Ujwal Singh is an AI/ML engineering student and developer in India, exploring full-stack development, cybersecurity, and digital forensics.',
  },
  '/about': {
    title: 'About Ujwal Singh | AI/ML Engineering Student & Developer',
    description:
      'Learn about Ujwal Singh’s AI/ML engineering studies, technical journey, and approach to building useful, secure software.',
  },
  '/skills': {
    title: 'Technical Skills | Ujwal Singh',
    description:
      'Explore Ujwal Singh’s technical toolkit across React, Node.js, Python, machine learning, databases, cybersecurity, Linux, and digital forensics.',
  },
  '/experience': {
    title: 'Experience & Credentials | Ujwal Singh',
    description:
      'Review Ujwal Singh’s internships, cybersecurity and full-stack training, professional learning, and verified credentials.',
  },
  '/projects': {
    title: 'Engineering Projects | Ujwal Singh',
    description:
      'Explore Ujwal Singh’s engineering projects in AI, cybersecurity, digital forensics, Python tooling, full-stack development, and open source.',
  },
  '/contact': {
    title: 'Contact Ujwal Singh | Collaboration & Opportunities',
    description:
      'Contact Ujwal Singh about engineering opportunities, software projects, AI and machine learning, cybersecurity, or open-source collaboration.',
  },
};

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean).join('/')}`;
    const page = pageMetadata[normalizedPath];
    const isNotFound = !page;
    const canonicalUrl =
      normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
    const title = page?.title || 'Page Not Found | Ujwal Singh';
    const description =
      page?.description ||
      'The requested page could not be found on Ujwal Singh’s portfolio.';

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta(
      'name',
      'robots',
      isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    );
    upsertMeta(
      'name',
      'googlebot',
      isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    );
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertCanonical(canonicalUrl);

    const existingSchema = document.getElementById('page-structured-data');
    if (isNotFound) {
      existingSchema?.remove();
      return;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': PERSON_ID },
      inLanguage: 'en-IN',
    };

    const script =
      existingSchema || document.createElement('script');
    script.id = 'page-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    if (!existingSchema) document.head.appendChild(script);
  }, [pathname]);

  return null;
}
