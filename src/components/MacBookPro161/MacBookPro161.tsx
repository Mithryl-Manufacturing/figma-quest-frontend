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
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { MacBookPro161Props } from 'src/types';

const MacBookPro1611: any = styled('div')({
  backgroundColor: `rgba(35, 47, 64, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

function MacBookPro161(props: MacBookPro161Props): JSX.Element {
  return (
    <MacBookPro1611 className={props.className}>
      <Helmet>
        <title>MacBookPro161</title>
      </Helmet>
    </MacBookPro1611>
  );
}

export default MacBookPro161;
