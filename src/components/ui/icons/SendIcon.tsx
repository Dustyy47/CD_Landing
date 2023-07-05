interface SendIconProps {
  strokeColor?: string
  fillColor?: string
  width?: string
  strokeWidth?: string
  classname?: string
}

export function SendIcon({
  strokeWidth = '1.5',
  width,
  classname
}: SendIconProps) {
  return (
    <svg
      className={classname}
      width={width}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6.00004 12L3.26904 3.12598C9.80185 5.02565 15.9624 8.02677 21.485 12C15.9628 15.9738 9.80262 18.9755 3.27004 20.876L6.00004 12ZM6.00004 12H13.5H6.00004Z' />
      <path d='M6.00004 12L3.26904 3.12598C9.80185 5.02565 15.9624 8.02677 21.485 12C15.9628 15.9738 9.80262 18.9755 3.27004 20.876L6.00004 12ZM6.00004 12H13.5' />
    </svg>
  )
}
