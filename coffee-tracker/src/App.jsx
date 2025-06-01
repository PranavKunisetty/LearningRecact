import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { History } from './components/History';
import { CoffeeForm } from './components/CoffeeForm';

export default function App() {

  const isAuthenticated = false; 

  const AuthenticationContent = (
    <>
      <Stats/> 
      <History/> 
    </>
  )
  return (
    <Layout>
      <Hero/>
      <CoffeeForm/>

      { isAuthenticated ? AuthenticationContent : <p>Please log in to see your stats and history.</p>}

    </Layout>
  )
}