import { Button, Card, CardBody } from "@nextui-org/react"
import FlexBox from "../FlexBox/FlexBox"
import Image from "next/image"
import { UniversityProgramCardProps } from "./types"



const UniversityProgramCard = ({
  src,
  programName,
  university,
  city,
  country,
  programType,
  duration,
  fee,
  startDate,
}: UniversityProgramCardProps) => {
  return (
    <Card>
      <CardBody className='flex flex-row gap-x-10'>
        <FlexBox className='flex-col gap-y-10'>
          <FlexBox className='items-center gap-x-20'>
            <Image
              alt='school logo'
              src={src}
              width={100}
              height={100}
            />
            <FlexBox className='flex-col gap-y-2'>
              <p className='font-semibold text-2xl'>{programName}</p>
              <p className='font-semibold text-lg text-slate-600'>{university} {city}, {country}</p>
            </FlexBox>
          </FlexBox>
          <FlexBox className='justify-between'>
            <FlexBox className='flex-col bg-slate-100 p-5 rounded-md h-[100px] gap-x-5'>
              <p className='text-slate-600'>Program type</p>
              <p className='font-semibold'>{programType}</p>
            </FlexBox>
            <FlexBox className='flex-col bg-slate-100 p-5 rounded-md h-[100px]'>
              <p className='text-slate-600'>Duration</p>
              <p className='font-semibold'>{duration} years</p>
            </FlexBox>
            <FlexBox className='flex-col bg-slate-100 p-5 rounded-md h-[100px]'>
              <p className='text-slate-600'>Annual tuition fee</p>
              <p className='font-semibold'>{fee}</p>
            </FlexBox>
            <FlexBox className='flex-col bg-slate-100 p-5 rounded-md h-[100px]'>
              <p className='text-slate-600'>Start date</p>
              <p className='font-semibold'>{startDate}</p>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox className='flex-col gap-y-7 justify-center'>
          <Button color="primary" variant="solid">Basvuru Yap</Button>
          <Button color="primary" variant="bordered">Program Detaylari</Button>
        </FlexBox>
      </CardBody>
    </Card>
  )
}

export default UniversityProgramCard