import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import FlexBox from "../FlexBox/FlexBox"
import Link from "next/link"

export interface UniversityCardProps {
  name: string;
  city: string;
  country: string;
  type: string;
  programCount: number;
  href: string;
  onPress: () => void;
}


const UniversityCard = ({
  name,
  city,
  country,
  type,
  programCount,
  href,
  onPress,
}: UniversityCardProps) => {
  return (
    <div className="min-w-[400px]">
      <Card fullWidth className='p-0 rounded-md'>
        <Image
          alt='Card background'
          className='object-fill brightness-75'
          src={`/yeditepe.jpeg`}
          removeWrapper
          width='w-full'
          radius="none"
        />
        <CardBody className="p-6 gap-y-2">
          <h2>
            <Link href={href} className='text-xl text-purple-800 font-semibold'>
              {name}
            </Link>
          </h2>
          <p className='text-md text-slate-600'><span className='font-semibold'>{city}</span>, {country}</p>
          <FlexBox className='gap-x-1'>
            <FlexBox className='bg-slate-100 w-1/2 flex-col p-1 rounded-md'>
              <p className='font-slate-800 text-sm'>Type</p>
              <p className='font-slate-800 text-md font-semibold'>{type}</p>
            </FlexBox>
            <FlexBox className='bg-slate-100 w-1/2 flex-col p-1 rounded-md'>
              <p className='font-slate-800 text-sm'>Total Programs</p>
              <p className='font-slate-800 text-md font-semibold'>{programCount}</p>
            </FlexBox>
          </FlexBox>
          <Button color='primary'>Start Application</Button>
          <Button color='secondary' onPress={onPress}>Find Programs</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default UniversityCard