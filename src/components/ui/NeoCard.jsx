export default function NeoCard({ children, className = '', ...props }) {
  return <div className={`neo-card ${className}`} {...props}>{children}</div>;
}
