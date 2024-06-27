"use client";
import { Helmet } from "react-helmet";
import { useParams, usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ProfessionalsTypo } from "@/types";
import { HttpService } from "@/services";
import { Section, Container, Column } from "@/assets/styles/objects";
import ProfileCard from "@/components/profileCard/profileCard";
import AppBreadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import {Calendar,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import {useLocale} from "@react-aria/i18n";
import {today, getLocalTimeZone, isWeekend, DateValue, CalendarDate, CalendarDateTime, ZonedDateTime} from "@internationalized/date";
import {I18nProvider} from "@react-aria/i18n";
import moment from 'moment';
import SpinnerProvider from '@/context/spinner';

export default function Single(props: any) {
  const http = new HttpService();
  const params = useParams();
  const [data, setData] = useState<ProfessionalsTypo | any>(null);
  let now = today(getLocalTimeZone());
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState<any>("inside");  
  const [scheduleDate, saveScheduledDate] = useState<any | null>(null);
  const { isLoading, setLoading } = useContext<any>(SpinnerProvider);
  const pathname = usePathname();
  
  let {locale} = useLocale();

  const [disabledRanges, setDisabledDates] = useState<any>([]);

  const fetchData = async () => {
    const response:ProfessionalsTypo[] = await http.get(`/api/professionals/${params?.id}`);
    setData(response);
  }     

  useEffect(() => {
    if(data) setLoading(false)
  }, [data])  

  useEffect(() => {
    fetchData()
  }, [])

  const handleSchedule = async (e: any) => {
    setLoading(true)
    let date = `${e.day}/${e.month}/${e.year}`;
    e = moment(`${e.year}-${e.month}-${e.day}`).subtract(1, "days").toString();

    let body = [data].map(item => {
      return {
        ...item,
        available_dates: [
          ...item?.available_dates,
          {date: e}
        ]
      };
    }).shift();

    const response:ProfessionalsTypo[] = await http.put(`/api/professionals/${params?.id}`, body);
    if(response) fetchData(), onOpen(), saveScheduledDate(date), setLoading(false);
  }    

  const getDaysDiff = (start_date: any, end_date: any, date_format = 'YYYY-MM-DD') => {
    const getDateAsArray = (date: string) => {
      return moment(date.split(/\D+/), date_format);
    }
    return getDateAsArray(end_date).diff(getDateAsArray(start_date), 'days') + 1;
  }  

  useEffect(() => {
    if(data && data?.available_dates) {
      let unAvaiableDates = data?.available_dates.map((o: any, index: number) => {
        return getDaysDiff(moment(new Date()).format("YYYY-MM-DD"), moment(Date.parse(o?.date)).format("YYYY-MM-DD"));
      }).sort((a: number, b: number) => a - b).map((diff: any, index: number) => {
        return [now.add({days: diff}), now.add({days: diff})];
      })

      setDisabledDates(unAvaiableDates);
    }
  }, [data])  

  let isDateUnavailable = (date: DateValue) =>
    disabledRanges.some((interval: (CalendarDate | CalendarDateTime | ZonedDateTime)[]) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
  );  
  
  return (
    (data && <Section>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Zenklub - {data?.name}</title>
      </Helmet>   
      <Container className="container d-flex flex-wrap align-items-stretch">
        <AppBreadcrumbs className="col-12" title={data?.name} />
        <ProfileCard className="flex-fill pe-2" data={data} />
        <Column className="d-flex justify-content-end">
          {disabledRanges && disabledRanges.length && <I18nProvider locale={locale}><Calendar 
            className="calendar"
            aria-label="Datas disponíveis" 
            showMonthAndYearPickers 
            onChange={handleSchedule}
            minValue={today(getLocalTimeZone())}
            defaultValue={today(getLocalTimeZone())}
            isDateUnavailable={isDateUnavailable} 
          /></I18nProvider>}
        </Column>      
      </Container>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Agendamento concluído com sucesso
              </ModalHeader>
              <ModalBody className="text-center d-flex justify-content-center align-items-center">
                Olá, parabéns! Seu agendamento com o profissional {data?.name} para o dia {scheduleDate} foi concluído <b>com sucesso!</b>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>      
    </Section>
    )
  )
}