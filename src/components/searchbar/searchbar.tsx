"use client"; 

import { Content } from './style';

import { searchbarTypo } from './typo';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar(props: searchbarTypo) {
  const { onChange = () => {}, ...restProps } = props;
  const router = useRouter();
  const pathname = usePathname() ?? ''; 

  return (
    <Content>
        <TextField
          hiddenLabel
          id="filled-search"
          type="search"
          placeholder="Busca por nome ou profissão"
          size="small"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if(event.target.value && pathname?.indexOf('professional') > -1) {
              router.push('/', { scroll: true })
            } else {
              onChange(event.target.value);
            }
          }}          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}          
          variant="filled"
        />
    </Content>
  );
}
