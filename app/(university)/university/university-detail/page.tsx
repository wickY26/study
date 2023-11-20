'use client'
import Hero from '../../../../components/Hero/Hero'
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Divider, Input, Image } from "@nextui-org/react"
import FlexBox from '../../../../components/FlexBox/FlexBox'
import UniversityProgramCard from '@/components/UniversityProgramCard/UniversityProgramCard'
import Icon from '@/components/UI/Icon/Icon'
import Rating from '@/components/UI/Rating/Rating'
import InfoBadge from '@/components/InfoBadge/InfoBadge'
import Link from 'next/link'

export default function UniversityDetailPage() {
  const description = 'Berlin most epic University'
  const universityText = `Freie Universität is a full-spectrum university, 
  comprising twelve departments and three Central Institutes that together 
  offer more than 150 different academic programs in a broad range of disciplines. 
  Charité – Universitätsmedizin Berlin is the joint medical school of Freie Universität 
  Berlin and Humboldt-Universität zu Berlin.`

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10">
      <Hero title='Freie Universität Berlin' description={description} photoUrl='hero'>
        <FlexBox className='flex-col gap-y-4'>
          <Button size='lg' radius='sm' className="bg-secondary-200 text-white">Apply Now !</Button>
          <FlexBox className='items-center gap-x-1'>
            <Icon name='location' color='gray' w={16} h={16} />
            <p className='text-white'>Berlin Steglitz Zehlendorf, Germany</p>
          </FlexBox>
        </FlexBox>
      </Hero>
      <FlexBox className='w-full flex-col gap-y-10 px-20'>
        <FlexBox className='flex-col gap-y-4'>
          <h2 className='text-xl font-bold'>Freie Universität Berlin</h2>
          <Rating rating={3} showRating={true} commentsCount={57} href='/' />
        </FlexBox>
        <FlexBox className='gap-x-10'>
          <FlexBox className='flex-col gap-y-10 w-4/6 '>
            <p>{universityText}</p>
            <FlexBox className='w-full -evenly-evenly'>
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='medal' w={36} h={36} />}
                title='#98'
                subTitle='Ranking'
                titleCSS='text-xl text-secondary'
              />
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='book' w={36} h={36} />}
                title='36'
                subTitle='Masters'
                titleCSS='text-xl text-secondary'
              />
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='badge' w={36} h={36} />}
                title='625'
                subTitle='Academic Staff'
                titleCSS='text-xl text-secondary'
              />
            </FlexBox>
            <FlexBox className='w-full -evenly-evenly'>
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='profile' w={36} h={36} />}
                title='27018'
                subTitle='Students'
                titleCSS='text-xl text-secondary'
              />
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='world' w={36} h={36} />}
                title='6214'
                subTitle='International Students'
                titleCSS='text-xl text-secondary'
              />
              <InfoBadge
                containerCSS='items-center gap-x-2 w-2/6'
                icon={<Icon color='gray' name='apartment' w={36} h={36} />}
                title='Public'
                subTitle='Instution Type'
                titleCSS='text-xl text-secondary'
              />
            </FlexBox>
            <Image src='/philobib.png' alt='carouselpic' className='rounded-none w-full' />
            <p className='text-xl font-bold'>Master’s Programmes</p>
            <Accordion variant='splitted'>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='book' color='gray' />}
                    title='Social Sciences (15)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='addChart' color='gray' />}
                    title='Natural Sciences & Mathematics (10)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='world' color='gray' />}
                    title='Humanities (9)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='computer' color='gray' />}
                    title='Computer Science & IT (4)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                <FlexBox className='justify-evenly'>
                  SELAM SELAM SELAM SELAM
                </FlexBox>
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='briefcase' color='gray' />}
                    title='Business & Management (3)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='windPower' color='gray' />}
                    title='Environmental Studies & Earth Sciences (2)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='medicine' color='gray' />}
                    title='Medicine & Health (2)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
              <AccordionItem
                title={
                  <InfoBadge
                    icon={<Icon w={24} h={24} name='settings' color='gray' />}
                    title='Engineering & Technology (1)'
                    titleCSS='text-md text-secondary'
                    containerCSS='gap-x-4 items-center'
                  />
                }
              >
                Selam
              </AccordionItem>
            </Accordion>
            <FlexBox className='flex-col gap-y-4'>
              <p className='text-xl font-bold'>Features</p>
              <p>{universityText}</p>
            </FlexBox>
            <InfoBadge
              containerCSS='gap-x-2 w-full'
              icon={<Icon color='gray' name='home' w={36} h={36} />}
              title='Accomodation'
              subTitle='Off-Campus Accommodations
              Students wishing to live off-campus need to research availability 
              on their own, and should arrive well before the start of term to do so.'
              titleCSS='text-xl text-secondary'
            />
            <InfoBadge
              containerCSS='gap-x-2 w-full'
              icon={<Icon color='gray' name='briefcase' w={36} h={36} />}
              title='Work While Studying'
              subTitle='See guidelines on working while studying here.'
              titleCSS='text-xl text-secondary'
            />
            <InfoBadge
              containerCSS='gap-x-2 w-full'
              icon={<Icon color='gray' name='accessibility' w={36} h={36} />}
              title='Accessibilities'
              subTitle={`Even if you do NOT meet our minimum English requirement 
              (IELTS or TOEFL), you still can get conditionally accepted in the program 
              of your choice with the condition of completing our English program prior to 
              starting your chosen program.`}
              titleCSS='text-xl text-secondary'
            />
            <InfoBadge
              containerCSS='gap-x-2 w-full'
              icon={<Icon color='gray' name='workSpace' w={36} h={36} />}
              title='Co-op/Internship Participation'
              subTitle={`Cooperative education (or co-operative education) 
              and internships are methods of combining classroom-based education with practical 
              work experience.`}
              titleCSS='text-xl text-secondary'
            />
            <FlexBox />
          </FlexBox>
          <FlexBox className='w-2/6 flex-col gap-y-10'>
            <Card fullWidth>
              <CardHeader className='bg-primary justify-center'>
                Cost & Durations
              </CardHeader>
              <CardBody className='p-0'>
                <InfoBadge
                  containerCSS='gap-x-2 shadow-md p-4'
                  icon={<Icon color='gray' name='creditCard' w={24} h={24} />}
                  title='0 EUR'
                  subTitle='Application Fee'
                  titleCSS='text-md font-bold'
                />
                <InfoBadge
                  containerCSS='gap-x-2 shadow-md p-4'
                  icon={<Icon color='gray' name='calendar' w={24} h={24} />}
                  title='4 years'
                  subTitle='Average undergraduate program'
                  titleCSS='text-md font-bold'
                />
                <InfoBadge
                  containerCSS='gap-x-2 shadow-md p-4'
                  icon={<Icon color='gray' name='creditCard' w={24} h={24} />}
                  title='2.000 EUR / Month'
                  subTitle='Cost of living'
                  titleCSS='text-md font-bold'
                />
                <InfoBadge
                  containerCSS='gap-x-2 shadow-md p-4'
                  icon={<Icon color='gray' name='creditCard' w={24} h={24} />}
                  title='15.000 EUR / Year'
                  subTitle='Gross tuition'
                  titleCSS='text-md font-bold'
                />
              </CardBody>
            </Card>
            <Card fullWidth>
              <CardHeader className='bg-primary justify-center'>
                Scholarships
              </CardHeader>
              <CardBody className='p-4'>
                <FlexBox className='flex-col gap-y-4'>
                  <p className='text-xl text-gray-600'>Deutschlandstipendium Scholarship</p>
                  <Link href='/'><p className='text-secondary'>learn more...</p></Link>
                  <FlexBox className='justify-evenly'>
                    <FlexBox className='flex-col p-8 gap-y-2'>
                      <p className='text-gray-600'>Grant</p>
                      <p className='font-bold'>300 EURO</p>
                    </FlexBox>
                    <FlexBox className='flex-col p-8 gap-y-2'>
                      <p className='text-gray-600'>Deadline</p>
                      <p className='font-bold'>24 Apr 2024</p>
                    </FlexBox>
                  </FlexBox>
                  <Divider />
                  <p className='text-xl text-gray-600'>Elsa-Neumann Scholarship</p>
                  <Link href='/'><p className='text-secondary'>learn more...</p></Link>
                  <FlexBox className='justify-evenly'>
                    <FlexBox className='flex-col p-8 gap-y-2'>
                      <p className='text-gray-600'>Grant</p>
                      <p className='font-bold'>1350 EURO</p>
                    </FlexBox>
                    <FlexBox className='flex-col p-8 gap-y-2'>
                      <p className='text-gray-600'>Deadline</p>
                      <p className='font-bold'>01 Jan 2024</p>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </CardBody>
            </Card>
            <Button size='lg' radius='sm' className="bg-secondary-200 text-white">Apply Now !</Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </main>
  )
}
