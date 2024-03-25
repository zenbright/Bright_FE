/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function CardContainer() {
  return (
    <div className='flex justify-between w-full'>
      <Card className="w-[250px] bg-rose-500 text-white hover:bg-rose-600 cursor-pointer">
        <CardHeader className="align-middle">
          <CardTitle className="text-xl">Tasks Completed</CardTitle>
          <CardDescription className= "text-2xl text-white">8</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[250px] bg-green-500 text-white hover:bg-green-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">Total Projects</CardTitle>
          <CardDescription className="text-2xl text-white">10</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[250px] bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">Total Notiftications</CardTitle>
          <CardDescription className="text-2xl text-white">5 new message</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default CardContainer;
