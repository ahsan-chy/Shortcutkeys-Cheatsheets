import React from 'react'
import { getDatabase , ref, set } from 'firebase/database';
import {app} from '../components/firebase'

const db = getDatabase(app);

export default function AuthenticationApp() {
    const  writeData=()=>{
        set(ref(db, 'users/'), {
            username: 'name',
            email: 'email',
            profile_picture : 'imageUrl'
          });
        
    }
  return (
    <div>
      <button onClick={writeData}>ADD DATA</button>
    </div>
  )
}
