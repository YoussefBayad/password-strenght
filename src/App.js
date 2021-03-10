import { useEffect, useState } from 'react';
import './app.css';

const PasswordItem = ({ text, valid }) => {
  return <li className={valid ? 'valid' : 'not-valid'}>{text}</li>;
};
function App() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({});

  useEffect(() => {
    // console.log('rege', /[A-Z]/.test(password));
    setPasswordStrength({
      minChar: password.length >= 8,
      upperChar: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    });
  }, [password]);

  return (
    <div className='container'>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ul>
          <PasswordItem
            text='At least 8 characters'
            valid={passwordStrength.minChar}
          />
          <PasswordItem
            text='At least on number'
            valid={passwordStrength.number}
          />
          <PasswordItem
            text='At least on uppercase'
            valid={passwordStrength.upperChar}
          />
          <PasswordItem
            text='At least on special character'
            valid={passwordStrength.specialChar}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
