'use client'
import Image from 'next/image'
import Hero from '../../components/Hero/Hero'
import { Button } from "@nextui-org/react";
import FlexBox from '../../components/FlexBox/FlexBox';
import UniversityCategoryCard from '../../components/UniversityCategoryCard/UniversityCategoryCard';
import SummerCard from '../../components/SummerCard/SummerCard';
import LoremCard from '../../components/LoremCard/Lorem';
import IpsumCard from '../../components/IpsumCard/IpsumCard';
import { useRouter } from 'next/navigation'
import CommentCard from '@/components/CommentCard/CommentCard';
import UniversityProgramCard from '@/components/UniversityProgramCard/UniversityProgramCard';

const comments = [
  {
    name: 'Vincent',
    lastName: 'AbouBakar',
    rating: 3,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi`,
    title: 'Professional Football Player',
  },
  {
    name: 'Vincent',
    lastName: 'AbouBakar',
    rating: 3,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi`,
    title: 'Professional Football Player',
  },
]

export default function Home() {
  const description = 'The smart alternative to applying direct for a degree abroad and the easy way to find programs that match your eligibility and aspirations'
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero title='LOREM IPSUM' description={description} photoUrl='hero'>
        <Button className='py-6 px-12 bg-primary-200 text-black text-lg' radius="full" size='lg'>Get Started</Button>
      </Hero>
      <FlexBox className='w-full justify-center mt-20 flex-col items-center gap-y-3'>
        <h2 className='text-3xl font-semibold'>Top Categories</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      </FlexBox>
      <FlexBox className='w-full mt-5 mb-20 gap-x-3 px-3'>
        <UniversityCategoryCard onPress={() => router.push('/university')} />
        <SummerCard onPress={() => router.push('/summer')} />
        <LoremCard />
        <IpsumCard />
      </FlexBox>
      <FlexBox className='w-full p-20 bg-slate-100 gap-x-10'>
        <FlexBox className='flex-col w-1/3 gap-y-10'>
          <p className='font-bold text-4xl'>What Our Students Have To Say</p>
          <p className='text-slate-500'>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</p>
        </FlexBox>
        <FlexBox className='gap-x-10'>
          {comments.map((comment, index) => <CommentCard key={index} {...comment} />)}
        </FlexBox>
      </FlexBox>
    </main >
  )
}
