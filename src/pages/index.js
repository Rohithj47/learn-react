// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// eslint-disable-next-line import/no-unresolved
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Profile from './qcomps/profile_mistake'
import TodoList from './qcomps/todos'
import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'

export default function Home() {
  return (
    <div className={styles.main}>
       <Gallery />
        <Profile />
        <TodoList />
    </div>
  )
}
