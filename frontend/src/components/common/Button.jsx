import { cn } from '../../lib/utils/cn.js'

function Button({ as = 'button', className, variant = 'primary', children, ...props }) {
  const buttonClassName = cn(
    'button',
    variant === 'secondary' && 'button--secondary',
    className,
  )

  if (as === 'button') {
    return (
      <button className={buttonClassName} {...props}>
        {children}
      </button>
    )
  }

  const LinkComponent = as

  return (
    <LinkComponent className={buttonClassName} {...props}>
      {children}
    </LinkComponent>
  )
}

export default Button
