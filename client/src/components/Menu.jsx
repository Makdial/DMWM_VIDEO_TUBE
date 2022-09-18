import React from "react";
import LamaTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MosqueIcon from '@mui/icons-material/Mosque';
import SchoolIcon from '@mui/icons-material/School';
import StadiumIcon from '@mui/icons-material/Stadium';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import styled from "@emotion/styled";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter};
  height: full;
  width: full;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top:0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 150px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Accueil
        </Item>
        <Link to="trends" style={{textDecoration:"none", color: "inherit"}}>
          <Item>
            <ExploreOutlinedIcon />
            Explorer
          </Item>
        </Link>
        <Link to="subscriptions" style={{textDecoration:"none", color: "inherit"}}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Abonnements
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Bibliotheque
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          Historique
        </Item>
        {!currentUser &&
          <>
            <Login>
              Connectez-vous pour aimer les videos, commenter et vous abonner.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  Connecter
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        }
        <Title>Vos meilleures Videos</Title>
        <Item>
          <MosqueIcon />
          Gamou
        </Item>
        <Item>
          <SchoolIcon />
          Universites du ramadan
        </Item>
        <Item>
          <StadiumIcon />
          Colisee de l'eveil
        </Item>
        <Item>
          <MusicNoteIcon />
          Music Orientales
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          Actualites
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Direct
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Parametres
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Signaler
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Aide
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          { darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
