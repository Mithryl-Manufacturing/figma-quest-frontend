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
import SideBarImage from 'src/assets/images/Dashboard_Side_Bar.png';
import SearchImage from 'src/assets/images/Dashboard____Search.png';
import UserControlSettingsImage from 'src/assets/images/Dashboard_User_Control___Settings.png';
import { styled } from '@mui/material/styles';
import DashboardCards from 'src/components/DashboardCards/DashboardCards';
import { Dashboard1Props } from 'src/types';

const Dashboard: any = styled('div')({
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

const SideBar: any = styled('img')({
  height: `1024px`,
  width: `225px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Search: any = styled('img')({
  height: `48px`,
  width: `898px`,
  position: `absolute`,
  left: `280px`,
  top: `30px`,
});

const UserControlSettings: any = styled('img')({
  height: `45px`,
  width: `99px`,
  position: `absolute`,
  left: `1260px`,
  top: `30px`,
});

const DashboardCards1: any = styled(DashboardCards)(({ theme }: any) => ({
  width: `1091px`,
  height: `612px`,
  position: `absolute`,
  left: `280px`,
  top: `200px`,
}));

const Dashboard2: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `280px`,
  top: `135px`,
});

function Dashboard1(props: Dashboard1Props): JSX.Element {
  return (
    <Dashboard className={props.className}>
      <SideBar src={SideBarImage} loading="lazy" alt={'Side Bar'} />
      <Search src={SearchImage} loading="lazy" alt={'& Search'} />
      <UserControlSettings
        src={UserControlSettingsImage}
        loading="lazy"
        alt={'User Control & Settings'}
      />
      <DashboardCards1 />
      <Dashboard2>{`Dashboard`}</Dashboard2>
    </Dashboard>
  );
}

export default Dashboard1;
