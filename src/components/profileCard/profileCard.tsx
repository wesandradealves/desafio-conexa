"use client"; 
import { ProfessionalsTypo } from '@/types';

import { Title, Role, Taxes, Content, Inner, Picture } from "@/components/profileCard/style";

import { Column, Paragraph } from '@/assets/styles/objects';

import Rating from '@/components/rating/rating';
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SpinnerProvider from '@/context/spinner';

export default function ProfileCard(props: ProfessionalsTypo) {
  const rating = useMemo(() => {
    return Math.round(props?.data?.testimonials.reduce((i: any, item: { rating: any; }) => i + item.rating, 0) / props?.data?.testimonials.length);
  }, [props]);  

  const { isLoading, setLoading } = useContext<any>(SpinnerProvider);
    
  return (
    <Content className={`profile-card ${props?.className}`}>
      <Inner className={`d-flex flex-wrap align-items-center p-2 h-100`}>
        <Picture>
          <LazyLoadImage
            alt={props?.data?.name}
            src={props?.data?.profile} // Use the `src` prop to pass the image URL
            effect="blur" // You can use different effects like 'blur', 'black-and-white', etc.
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "1s"},
            }}            
          />       
        </Picture>
        <Column className="flex-fill ps-3">
          <Title>{props?.data?.name}</Title>
          <Role>{props?.data?.activity?.name} <span>| {props?.data?.address?.country}</span></Role>
          <Rating qti={props?.data?.testimonials.length} rate={rating}/>
          <Taxes>R${props?.data?.attendant?.price} <small>/ {props?.data?.attendant?.time} minutos</small></Taxes>
        </Column>
        <Column className="col-12 mt-auto">
          <Paragraph className='pt-2 pb-2'>
            {props?.data?.description}
          </Paragraph>
          {props?.anchor && <>
            <Link onClick={() => { setLoading(true) }} href={`/professional/${props?.data?.id}`} as={`/professional/${props?.data?.id}`}>
              <Button className='d-flex align-items-center w-100' variant="contained" endIcon={<CalendarMonthIcon />}>
                Agendar
              </Button>     
            </Link>         
          </>}
        </Column>
      </Inner>

    </Content>    
  );
}