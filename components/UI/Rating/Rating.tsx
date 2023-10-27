import React from 'react'
import { useMemo } from 'react'
import { ConsultantRatingProps } from './types'
import { createRatingArray } from './utils'
import Icon from '../Icon/Icon'
import FlexBox from '@/components/FlexBox/FlexBox'
import { commonColors } from '@nextui-org/theme'

const ConsultantRating = ({
  rating,
  commentsCount,
}: ConsultantRatingProps) => {
  const ratingArray = useMemo(() => createRatingArray(rating), [rating])
  return (
    <FlexBox className='items-center'>
      {
        (ratingArray) && ratingArray.map((element, i) => (
          <Icon
            key={i}
            color={commonColors.yellow[400]}
            name={(element == 1) ? 'star' : ((element == 0.5) ? 'starHalf' : 'starOutline')}
            w={24}
            h={24}
          />
        ))
      }
      {/* {commentsCount && (
        <Text
          color='$textGray'
          size='$xs'
        >{`(${commentsCount})`}</Text>
      )} */}
    </FlexBox>
  )
}

export default ConsultantRating
