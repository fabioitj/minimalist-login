import { useState } from 'react'
import './App.scss'
import Button from './components/Button';
import Field from './components/Field'

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    alert("Signed in!");
  }

  return (
    <div className="App">
      <section className="container">
        <div className='container__box'>
          <div className='container__box__header'>
            <h3 className='container__box__header__title'>
              Login
            </h3>
          </div>
          <div className='container__box__body'>
            <Field type="text" label="User" value={user} setValue={setUser} />
            <Field type="password" label="Password" value={password} setValue={setPassword} />
          </div>
          <div className='container__box__footer'>
            <Button callback={handleSignIn}>
              Sign in
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
