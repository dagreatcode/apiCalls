import React from 'react';
import HomeView from './HomeView';

interface IHomeContainerProps {
}

export interface IHomeViewProps {
}

const HomeContainer=(props: IHomeContainerProps) => {
   const { } = props

   const passProps: IHomeViewProps = {

   }

   return <HomeView {...passProps}/>
} 

HomeContainer.defaultProps = {

} 

export default HomeContainer;
