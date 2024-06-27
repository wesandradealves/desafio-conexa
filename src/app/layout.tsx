"use client"; 
import { useState, createContext, useContext, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

import { HttpService } from '@/services';
import { ProfessionalsTypo } from '@/types';
import DataProvider from "@/context/data";
import SpinnerProvider from "@/context/spinner";
import ClockLoader from "react-spinners/ClockLoader";

import { Header } from "@/assets/styles/components";

import Logo from "@/components/logo/logo";
import Navigation from '@/components/navigation/navigation';

import SearchBar from '@/components/searchbar/searchbar';
import SearchProvider from '@/context';

import { searchbarTypo } from '@/components/searchbar/typo';

import { Content, Container, Spinner } from '@/assets/styles/objects';
import "@/assets/styles/style.scss";
import "@/app/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const http = new HttpService();
  const [keywords, setKeywords] = useState<searchbarTypo | any>(null);
  const [isLoading, setLoading] = useState<any>(1);
  const [professionals, setProfessionals] = useState<ProfessionalsTypo | any>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const professionals:ProfessionalsTypo[] = await http.get('/api/professionals');
      if(professionals) setLoading(false), setProfessionals(professionals.sort((a: any, b: any) => a?.name.localeCompare(b?.name)));
    }

    fetchData();
  }, [])

  return (
    <html> 
      <body>   
        <SpinnerProvider.Provider value={{isLoading, setLoading}}>     
          {isLoading && <Spinner>
            <ClockLoader
              color="#7241D4"
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"            
            />  
          </Spinner>  }
          <DataProvider.Provider value={{professionals, setProfessionals}}>       
            <SearchProvider.Provider value={{keywords, setKeywords}}>           
              <Header>
                <Container className="container d-flex align-items-center justify-content-between pt-4 pb-4">
                  <Logo href="/" />
                  <Navigation className="ms-auto" />
                  <SearchBar onChange={useCallback((keywords: searchbarTypo) => {
                    setKeywords(keywords);
                  }, [keywords])} />  
                </Container>
              </Header>    
              <Content>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Zenklub - Página Inicial</title>
                </Helmet>   
                {children}
              </Content>    
            </SearchProvider.Provider>
          </DataProvider.Provider>
        </SpinnerProvider.Provider>
      </body>
    </html>
  );
}
