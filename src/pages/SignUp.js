import React from 'react'
import BgSloped from '../components/BgSloped/BgSloped'
import { originals } from '../urls'
import SignUpBox from '../components/SignUpBox/SignUpBox'
import NavBar from '../components/navbar/NavBar'

function SignUp() {
  return (
    <div>
    <NavBar/>
    <BgSloped url={originals}/>
    <SignUpBox/>
    </div>
  )
}

export default SignUp