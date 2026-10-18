import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section-wrap section-block not-found-page">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This page wandered off.</h1>
      <p>The page you’re looking for doesn’t exist or may have moved.</p>
      <Link className="button-primary" to="/">Back to home</Link>
    </section>
  );
}
