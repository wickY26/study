import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import FlexBox from "../FlexBox/FlexBox";

export default function LoremCard() {
  return (
    <div className="w-1/4">
      <Card fullWidth isPressable shadow='none' className="p-1 rounded-none bg-yellow-100 hover:bg-yellow-300 hover:text-white">
        <CardBody>
          <FlexBox className="gap-x-5 justify-center">
            <svg className="w-6 h-6"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
            <p>Lorem Ipsum</p>
          </FlexBox>
        </CardBody>
      </Card>
    </div>
  )
}
