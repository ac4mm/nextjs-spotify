import { Metadata } from "next"
import { Header } from "components/Header/Header"
import PlayerBar from "components/PlayerBar/PlayerBar"
import ContentMusic from "../components/ContentMusic/ContentMusic"
import Sidebar from "../components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Spotify Clone",
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      {/*  Header*/}
      <Header />

      {/*  Your Sidebar*/}
      <Sidebar />

      {/*  ContentMusic*/}
      <ContentMusic />

      {/*  Album*/}

      {/*  Player_bar*/}
      <PlayerBar />

    </>
  )
}
