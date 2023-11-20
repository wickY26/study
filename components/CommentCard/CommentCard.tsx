import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import FlexBox from "../FlexBox/FlexBox"
import { CommentCardProps } from "./types"
import Rating from "../UI/Rating/Rating"



const CommentCard = ({
  comment,
  name,
  lastName,
  title,
  rating,
}: CommentCardProps) => {
  return (
    <Card className="max-w-[400px] p-3">
      <CardHeader className='flex items-center justify-between'>
        <Image
          alt='profile-pic'
          src='/profile-pic.jpeg'
          width={100}
          height={100}
          radius='full'
          className="border-3 border-primary object-cover aspect-square"
        />
        <div className="p-2">
          <p>{name} {lastName}</p>
          <p className="text-sm italic">{title}</p>
        </div>

      </CardHeader>
      <CardBody>
        <p>{comment}</p>
      </CardBody>
      <CardFooter className='flex flex-col'>
        <Rating rating={rating} />
      </CardFooter>
    </Card>
  )
}

export default CommentCard