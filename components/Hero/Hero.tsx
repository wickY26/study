import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react"
import FlexBox from "../FlexBox/FlexBox"

interface HeroProps {
  title: string;
  description: string;
  photoUrl: string;
  children?: React.ReactNode;
}

const Hero = ({ title, description, photoUrl, children }: HeroProps) => {

  return (
    <FlexBox>
      <Card fullWidth radius="none">
        <Image
          alt="Card background"
          className="z-0 object-cover brightness-75"
          src={`../../${photoUrl}.jpg`}
          removeWrapper
          width='w-full'
          radius="none"
        />
        <CardBody className="absolute z-10 bottom-20 flex-col !items-start px-12">
          <FlexBox className="flex-col gap-y-6">
            <h1 className="text-4xl text-white">{title}</h1>
            <p className="text-white text-xl w-2/4">{description}</p>
            <FlexBox>
              {children}
            </FlexBox>
          </FlexBox>
        </CardBody>
      </Card>
    </FlexBox>
  )
}

export default Hero
