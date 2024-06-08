import React from 'react'
import Nav from '../Nav.tsx'
import {useState} from 'react'
import pic from '../Assets/prof.jpg'
import Calendar from 'react-calendar'


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Profile = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='prof-container w-100'>
      <Nav/>
      <div className="w-100vh h-100vh">
          <img src={pic} alt="" className="w-64 h-48 m-auto border-2 border-black"/>
          <h1 className='text-2xl bold text-white m-auto w-max'>Jessica Nguyen</h1>
          <p className='text-sm bold text-white m-auto w-max'>A nervous virgo who loves to bullet journal</p>
      </div>

      <div className="content flex justify-center item-center">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Profile