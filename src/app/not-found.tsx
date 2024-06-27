"use client"; 
import { Helmet } from 'react-helmet';
import { HttpService } from '@/services';
import { useEffect } from "react";
import RootLayout from "@/app/layout"

export default function Home() {
  const fetchData = async() => {
  }  

  useEffect(() => {
  }, []);  

  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Zenklub - Página não encontrada</title>
        </Helmet>     
        404 - Página não encontrada 
    </>
  )
}