import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import FlexBox from "../FlexBox/FlexBox";

export default function IpsumCard() {
  return (
    <div className="w-1/4">
      <Card fullWidth isPressable shadow='none' className="p-1 rounded-none bg-purple-100 hover:bg-purple-300 hover:text-white">
        <CardBody>
          <FlexBox className="gap-x-5 justify-center">
            <svg className="w-6 h-6"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>
            <p>Lorem Ipsum</p>
          </FlexBox>
        </CardBody>
      </Card>
    </div>
  )
}
