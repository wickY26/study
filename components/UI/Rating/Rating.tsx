import React from 'react'
import { useMemo } from 'react'
import { RatingProps } from './types'
import { createRatingArray } from './utils'
import Icon from '../Icon/Icon'
import FlexBox from '@/components/FlexBox/FlexBox'
import { commonColors } from '@nextui-org/theme'
import Link from 'next/link'

const Rating = ({
  rating,
  commentsCount,
  showRating,
  href,
}: RatingProps) => {
  const ratingArray = useMemo(() => createRatingArray(rating), [rating])
  return (
    <FlexBox className='items-center gap-x-2'>
      <FlexBox>
        {
          (ratingArray) && ratingArray.map((element, i) => (
            <Icon
              key={i}
              color={commonColors.yellow[400]}
              name={(element == 1) ? 'star' : ((element == 0.5) ? 'starHalf' : 'starOutline')}
              w={16}
              h={16}
            />
          ))
        }
      </FlexBox>
      {
        showRating && <p className='font-bold'>{rating}</p>
      }
      {commentsCount && (
        <Link href={`${href}`}>{`Read ${commentsCount} reviews`}</Link>
      )}
    </FlexBox>
  )
}

export default Rating
