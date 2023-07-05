interface LabelProps {
  children: string
  isRequired?: boolean
}
export function Label({ children, isRequired = false }: LabelProps) {
  return (
    <label className='block mb-2 subtitle2'>
      {children}
      <span className={isRequired ? 'text-lavenderRed' : 'opacity-0'}> *</span>
    </label>
  )
}
