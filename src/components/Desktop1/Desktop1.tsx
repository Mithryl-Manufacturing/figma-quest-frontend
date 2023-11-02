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
import { styled } from '@mui/material/styles';
import SideBarLogin from 'src/components/SideBarLogin/SideBarLogin';
import { Desktop1Props } from 'src/types';

const Desktop11: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
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

const SideBarLogin1: any = styled(SideBarLogin)(({ theme }: any) => ({
  width: `125px`,
  height: `1024px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

function Desktop1(props: Desktop1Props): JSX.Element {
  return (
    <Desktop11 className={props.className}>
      <SideBarLogin1 />
    </Desktop11>
  );
}

export default Desktop1;
