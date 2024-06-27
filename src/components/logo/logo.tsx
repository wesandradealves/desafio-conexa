"use client"; 
import Image from "next/image";
import Link from 'next/link';
import { Content } from './style';

export default function Logo(props: any) {
  return (
    <Content className={props.className}>
      <Link href={props.href} as={props.href}>
        <Image
          src="https://cdn.prod.website-files.com/613f7ca80295647d415b0d85/661e6c2947cc1675a5b3a4e2_logotipo_roxo_zencnx.svg"
          alt="Logo Zenklub"
          loading="lazy"
          width={127}
          height={32}
        />            
      </Link>
    </Content>
  );
}