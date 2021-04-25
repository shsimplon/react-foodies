import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Recette',
    path: '/recette',
    icon: <GiIcons.GiKitchenScale />,
    cName: 'nav-text'
  },
  {
    title: 'Favoris',
    path: '/favoris',
    icon: <MdIcons.MdFavorite/>,
    cName: 'nav-text'
  },
  {
    title: 'Recettes par catégories',
    path: "/category/:id" ,
    icon: <GiIcons.GiKitchenScale />,
    cName: 'nav-text'
  },

];