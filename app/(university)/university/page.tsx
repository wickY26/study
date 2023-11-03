'use client'
import Image from 'next/image'
import Hero from '../../../components/Hero/Hero'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, useDisclosure } from "@nextui-org/react";
import FlexBox from '../../../components/FlexBox/FlexBox';
import { useRouter } from 'next/navigation'
import UniversityCard, { UniversityCardProps } from '@/components/UniversityCard/UniversityCard';
import { useMemo, useState } from 'react';
import Icon from '@/components/UI/Icon/Icon';
import FilterModal from './FilterModal/FilterModal';

const universities = [
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  },
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  },
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  },
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  },
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  },
  {
    name: 'Koc Universitesi',
    type: 'Private',
    programCount: 32,
    city: 'Istanbul',
    country: 'Turkiye',
    href: '/university/programs'
  }
]

export default function Home() {
  const description = 'The smart alternative to applying direct for a degree abroad and the easy way to find programs that match your eligibility and aspirations'
  const [selectedKeys, setSelectedKeys] = useState(new Set(["University_Name_A-Z"]));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter()
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10">
      <Hero title='LOREM IPSUM' description={description} photoUrl='hero'>
        <FlexBox className='items-center gap-x-3 bg-zinc-300 p-5'>
          <Input size='sm' label='City' fullWidth={false} />
          <Input size='sm' label='University' fullWidth={false} />
          <Button size='lg' radius='sm' className="bg-primary-800 text-white">Search</Button>
        </FlexBox>
      </Hero>
      <FlexBox className='w-full justify-center flex-col items-center gap-y-3'>
        <h2 className='text-3xl'>Top Universities</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      </FlexBox>
      <FlexBox className='w-full bg-slate-100 flex-col items-center px-40 gap-y-3 py-10'>
        <FlexBox className='justify-between w-full items-center'>
          <Button
            color='primary'
            startContent={<Icon color='white' name='filter' />}
            onPress={onOpen}
          ><p className='text-md'>Filter</p></Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize"
                color='secondary'
              >
                Sort By {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="University_Name_A-Z">University Name A-Z </DropdownItem>
              <DropdownItem key="University_Name_Z-A">University Name Z-A</DropdownItem>
              <DropdownItem key="City_A-Z">City A-Z</DropdownItem>
              <DropdownItem key="City_Z-A">City Z-A</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FlexBox>
        <FlexBox className='w-full items-center gap-y-3 gap-x-3 justify-between flex-wrap'>
          {universities.map((uni, i) => <UniversityCard key={i} {...uni} onPress={() => router.push(`${uni.href}`)} />)}
        </FlexBox>
      </FlexBox>
      <FilterModal onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
  )
}
