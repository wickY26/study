import FlexBox from '../FlexBox/FlexBox'

interface InfoBadgeProps {
  containerCSS?: string;
  titleCSS?: string;
  subTitleCSS?: string;
  icon: React.JSX.Element;
  title: string;
  subTitle?: string | React.JSX.Element;
}

const InfoBadge = ({
  containerCSS,
  icon,
  titleCSS = 'text-xl text-secondary',
  title,
  subTitleCSS = 'text-sm text-gray-500',
  subTitle,
}: InfoBadgeProps) => {

  return (
    <FlexBox className={`${containerCSS}`}>
      <FlexBox>
        {icon}
      </FlexBox>
      <FlexBox className='flex-col'>
        <p className={`${titleCSS}`}>{title}</p>
        <p className={`${subTitleCSS}`}>{subTitle}</p>
      </FlexBox>
    </FlexBox>
  )
}

export default InfoBadge