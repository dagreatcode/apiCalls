import React from 'react';
import NavBarView from './NavBarView';

interface INavBarContainerProps {
}

export interface INavBarViewProps {
}

const NavBarContainer=(props: INavBarContainerProps) => {
   const { } = props

   const passProps: INavBarViewProps = {

   }

   return <NavBarView {...passProps}/>
} 

NavBarContainer.defaultProps = {

} 

export default NavBarContainer;
