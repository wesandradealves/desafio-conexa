"use client"; 
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function AppBreadcrumbs(props: any) {

  return (
      <Breadcrumbs className={props.className} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Página Inicial
        </Link>
        <Link
          underline="hover"
          color="inherit"
        >
          {props?.title}
        </Link>
      </Breadcrumbs>  
  );
}