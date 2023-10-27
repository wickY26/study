'use client'

interface FlexBoxProps {
  className?: string;
  children?: React.ReactNode
}

const FlexBox = ({ className, children }: FlexBoxProps) => {

  return (
    <div className={`flex border-box relative relative ${className}`}>
      {children}
    </div>
  )
}

export default FlexBox