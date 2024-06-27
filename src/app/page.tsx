"use client"; 
import { useCallback, useContext, useEffect, useState } from "react";
import SearchProvider from '@/context';
import { Section, Container } from '@/assets/styles/objects';

import DataProvider from '@/context/data';
import ProfileCard from '@/components/profileCard/profileCard';
import { Grid } from "@/assets/styles/objects";

export default function Home() {
  const { keywords } = useContext<any>(SearchProvider);
  const { professionals } = useContext<any>(DataProvider);
  const [filter, setFilter] = useState<any>([]);

  useEffect(() => {
    setFilter(professionals);
  }, [professionals]);    

  useEffect(() => {
    if(keywords) {
      let filter = professionals.filter(function (o: any) { return o?.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(keywords.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) != -1 || o?.activity?.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(keywords.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) != -1 });
      setFilter(filter);
    } else {
      setFilter(professionals);
    }
  }, [keywords]);    

  return (
    <>
      {filter &&  <Section id='content'>
        <Container className='container'>
            <Grid className='d-flex flex-wrap align-items-stretch'>
              {filter.map(function(row: any, i: number){
                  return (
                    <ProfileCard className="col-12 col-md-6 col-lg-4 p-2" anchor={true} data={row} key={i} />
                  );
              })}
            </Grid>
        </Container>
      </Section>}
    </>
  )
}