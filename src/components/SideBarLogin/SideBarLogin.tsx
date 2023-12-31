/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import Image1Image from 'src/assets/images/SideBarLogin_image_1.png';
import { styled } from '@mui/material/styles';
import { SideBarLoginProps } from 'src/types';

const SideBarLogin1: any = styled('div')({
  backgroundColor: `rgba(35, 47, 64, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Image1: any = styled('img')({
  height: `59px`,
  width: `65px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `30px`,
  top: `25px`,
});

function SideBarLogin(props: SideBarLoginProps): JSX.Element {
  return (
    <SideBarLogin1 className={props.className}>
      <Image1 src={Image1Image} loading="lazy" alt={'image 1'} />
    </SideBarLogin1>
  );
}

export default SideBarLogin;
