import Image from 'next/image'
import './globals.css'
import Header from './components/header'
import How from './components/section1'
import Categories from './components/categories'

export default function Home() {
  return (
    <div>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      <Header></Header>
      <How></How>
      <Categories></Categories>
    </div>
  )
}
