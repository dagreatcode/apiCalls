import React from 'react';
import HeaderView from './HeaderView';

interface IHeaderContainerProps {
}

export interface IHeaderViewProps {
}

const HeaderContainer=(props: IHeaderContainerProps) => {
   const { } = props

   const passProps: IHeaderViewProps = {

   }

   return <HeaderView {...passProps}/>
} 

HeaderContainer.defaultProps = {

} 

export default HeaderContainer;
