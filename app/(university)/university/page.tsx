'use client'
import Image from 'next/image'
import Hero from '../../../components/Hero/Hero'
import { Button, Input } from "@nextui-org/react";
import FlexBox from '../../../components/FlexBox/FlexBox';
import { useRouter } from 'next/navigation'
import UniversityProgramCard from '@/components/UniversityProgramCard/UniversityProgramCard';

const programs = [
  {
    src: '/uni-logo.png',
    programName: 'Leisure & Tourism Management - BA',
    university: 'Koc Universitesi',
    city: 'Istanbul',
    country: 'Turkiye',
    programType: 'Bachelor&apos;s',
    duration: '3',
    fee: '14,396 USD',
    startDate: 'January',
  },
  {
    src: '/uni-logo.png',
    programName: 'Leisure & Tourism Management - BA',
    university: 'Koc Universitesi',
    city: 'Istanbul',
    country: 'Turkiye',
    programType: 'Bachelor&apos;s',
    duration: '3',
    fee: '14,396 USD',
    startDate: 'January',
  },
  {
    src: '/uni-logo.png',
    programName: 'Leisure & Tourism Management - BA',
    university: 'Koc Universitesi',
    city: 'Istanbul',
    country: 'Turkiye',
    programType: 'Bachelor&apos;s',
    duration: '3',
    fee: '14,396 USD',
    startDate: 'January',
  },
]


export default function Home() {
  const description = 'The smart alternative to applying direct for a degree abroad and the easy way to find programs that match your eligibility and aspirations'

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero title='LOREM IPSUM' description={description} photoUrl='hero'>
        <FlexBox className='items-center gap-x-3 bg-zinc-300 p-5'>
          <Input size='sm' label='City' fullWidth={false} />
          <Input size='sm' label='University' fullWidth={false} />
          <Button size='lg' radius='sm' className="bg-primary-800 text-white">Search</Button>
        </FlexBox>
      </Hero>
      <FlexBox className='w-full justify-center mt-20 flex-col items-center gap-y-3 mb-20'>
        <h2 className='text-3xl'>Top Programs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      </FlexBox>
      <FlexBox className='flex-col gap-y-10 mb-20'>
        {programs.map((program, i) => <UniversityProgramCard key={i} {...program} />)}
      </FlexBox>
    </main>
  )
}
