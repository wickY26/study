import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import FlexBox from "../FlexBox/FlexBox";

interface Props {
  onPress: () => void;
}

export default function UniversityCategoryCard({
  onPress,
}: Props) {

  return (
    <div className="w-1/4">
      <Card fullWidth isPressable shadow='none' className="p-1 rounded-none bg-green-100 hover:bg-green-300 hover:text-white" onPress={onPress}>
        <CardBody>
          <FlexBox className="gap-x-5 justify-center">
            <svg className="w-6 h-6 green-700"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
            <p className="green-700">University</p>
          </FlexBox>
        </CardBody>
      </Card>
    </div>
  )
}


