import React from 'react';
import FlightsView from './FlightsView';

interface IFlightsContainerProps {
}

export interface IFlightsViewProps {
}

const FlightsContainer=(props: IFlightsContainerProps) => {
   const { } = props

   const passProps: IFlightsViewProps = {

   }

   return <FlightsView {...passProps}/>
} 

FlightsContainer.defaultProps = {

} 

export default FlightsContainer;
