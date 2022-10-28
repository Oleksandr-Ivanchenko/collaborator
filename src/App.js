import { Button } from '@mui/material';
import { useState } from 'react';
import './App.scss';
import AlertDialogSlide from './componets/AlertDialogSlide/AlertDialogSlide';
import { GeneralNotifications } from './componets/GeneraNotifications/GeneralNotifications';
import { Header } from './componets/Header';
import { SiteNotifications } from './componets/SiteNotifications/SiteNotifications';
import { TelegramNotifications } from './componets/TelegramNotifications/TelegramNotifications';

function App() {
  const [generalNotifications, setGeneralNotifications] = useState({
    series: true,
    webinars: false,
    privateMessages: true
  })

  const [siteNotifications, setSiteNotifications] = useState({
    news: false,
    business: true,
    one: false,
    seo: false,
    links: true,
    housesInUkraine: true,
    housesInUkrain: false
  })

  const [telegramNotifications, setTelegramNotifications] = useState({
    news: false
  })

  const setDefault = () => {
    setGeneralNotifications({
      series: true,
      webinars: true,
      privateMessages: true
    })

    setSiteNotifications({
      news: true,
      business: true,
      one: true,
      seo: true,
      links: true,
      housesInUkraine: true,
      housesInUkrain: true
    })

    setTelegramNotifications({
      news: true
    })
  }

  return (
    <div className="app">
      <Header />
      <GeneralNotifications
        state={generalNotifications}
        setState={setGeneralNotifications}
      />
      <SiteNotifications
        state={siteNotifications}
        setState={setSiteNotifications}
      />
      <TelegramNotifications
        state={telegramNotifications}
        setState={setTelegramNotifications}
      />
      <div className="app__buttons">
        <Button
          variant="text"
          onClick={setDefault}
          sx={{
            width: 213,
            height: 50,
            textTransform: 'none',
            background: '#f0f6ff',
            color: '#3861fb',
          }}
        >
          По умолчанию
        </Button>
        <AlertDialogSlide />
      </div>
    </div>
  );
}

export default App;
