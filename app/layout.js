import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Script from 'next/script'
import Aside from '@/components/aside/Aside';
import 'animate.css'
import VerticalRule from '@/components/components/VerticalRule';
import MainSection from '@/components/main/MainSection';
import MainDataSection from '@/components/main/MainDataSection';
import AudioPlayer from '@/components/main/AudioPlayer';
import HorizontalRuleFull from '@/components/components/HorizontalRuleFull';

export const metadata = {
  title: 'Spotipy',
  description: 'A Music Web App',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="body d-flex justify-content-center align-items-center" >
        <div className="layout d-flex">
          <Aside />
          <VerticalRule />
          <MainSection>
            <MainDataSection>{children}</MainDataSection>
            <HorizontalRuleFull/>
            <AudioPlayer></AudioPlayer>
          </MainSection>
        </div>

        {/* <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></Script> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></Script> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></Script> */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"></Script>
      </body>
    </html>
  );
}
