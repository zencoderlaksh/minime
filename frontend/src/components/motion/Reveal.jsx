function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>
}

export default Reveal
