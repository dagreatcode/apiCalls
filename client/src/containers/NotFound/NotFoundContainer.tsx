import React from 'react';
import NotFoundView from './NotFoundView';

interface INotFoundContainerProps {
}

export interface INotFoundViewProps {
}

const NotFoundContainer=(props: INotFoundContainerProps) => {
   const { } = props

   const passProps: INotFoundViewProps = {

   }

   return <NotFoundView {...passProps}/>
} 

NotFoundContainer.defaultProps = {

} 

export default NotFoundContainer;
