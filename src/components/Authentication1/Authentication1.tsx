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
import { TextField, Button, Link as MUILink } from '@mui/material';
import LogoImage from 'src/assets/images/Authentication1_Logo.png';
import { styled } from '@mui/material/styles';
import { Authentication1Props } from 'src/types';

const Authentication11: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Authentication12: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `195px 0px`,
  boxSizing: `border-box`,
  width: `530px`,
  height: `727px`,
  margin: `0px`,
  overflow: `hidden`,
}));

const LogIn: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const Top: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Logo: any = styled('img')({
  height: `62.23px`,
  width: `48.38px`,
  objectFit: `cover`,
  margin: `30px 0px 0px 0px`,
});

const LogInToYourAccount: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['H4'].fontStyle,
  fontFamily: theme.typography['Typography']['H4'].fontFamily,
  fontWeight: theme.typography['Typography']['H4'].fontWeight,
  fontSize: theme.typography['Typography']['H4'].fontSize,
  letterSpacing: theme.typography['Typography']['H4'].letterSpacing,
  lineHeight: theme.typography['Typography']['H4'].lineHeight,
  textDecoration: theme.typography['Typography']['H4'].textDecoration,
  textTransform: theme.typography['Typography']['H4'].textTransform,
  margin: `0px`,
}));

const Input1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: theme.palette['Text']['Secondary'],
  fontStyle: theme.typography['Components']['Label'].fontStyle,
  fontFamily: theme.typography['Components']['Label'].fontFamily,
  fontWeight: theme.typography['Components']['Label'].fontWeight,
  fontSize: theme.typography['Components']['Label'].fontSize,
  letterSpacing: theme.typography['Components']['Label'].letterSpacing,
  lineHeight: theme.typography['Components']['Label'].lineHeight,
  textDecoration: theme.typography['Components']['Label'].textDecoration,
  textTransform: theme.typography['Components']['Label'].textTransform,
}));

const TextFieldStandard1: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
  color: theme.palette['Text']['Secondary'],
  fontStyle: theme.typography['Components']['Label'].fontStyle,
  fontFamily: theme.typography['Components']['Label'].fontFamily,
  fontWeight: theme.typography['Components']['Label'].fontWeight,
  fontSize: theme.typography['Components']['Label'].fontSize,
  letterSpacing: theme.typography['Components']['Label'].letterSpacing,
  lineHeight: theme.typography['Components']['Label'].lineHeight,
  textDecoration: theme.typography['Components']['Label'].textDecoration,
  textTransform: theme.typography['Components']['Label'].textTransform,
}));

const Btm: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: theme.palette['Primary']['Contrast'],
  fontStyle: theme.typography['Components']['Button Font - Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Large'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Large'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Large'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Large'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Large'].textTransform,
}));

const Link1: any = styled(MUILink)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
  color: theme.palette['Warning']['Dark'],
  fontStyle: theme.typography['Typography']['Body 2 Link'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2 Link'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2 Link'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2 Link'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2 Link'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2 Link'].lineHeight,
  textDecoration: `'initial'`,
  textTransform: theme.typography['Typography']['Body 2 Link'].textTransform,
}));

function Authentication1(props: Authentication1Props): JSX.Element {
  return (
    <Authentication11 className={props.className}>
      <Authentication12>
        <LogIn>
          <Top>
            {false && <Logo src={LogoImage} loading="lazy" alt={'Logo'} />}
            <LogInToYourAccount>{`Log In to your Account`}</LogInToYourAccount>
          </Top>
          <Input1>
            <TextFieldStandard
              size={'medium'}
              disabled={false}
              multiline={false}
              label={'User Name'}
            />
            <TextFieldStandard1
              size={'medium'}
              disabled={false}
              multiline={false}
              label={'Password'}
            />
          </Input1>
          <Btm>
            <ButtonContained
              variant="contained"
              size={'large'}
              color={'primary'}
              disabled={false}
            >
              {'Log IN'}
            </ButtonContained>
            <Link1 color={'primary'} disabled={false} underline={'always'}>
              {'Forgot Password'}
            </Link1>
          </Btm>
        </LogIn>
      </Authentication12>
    </Authentication11>
  );
}

export default Authentication1;