import React, { useState } from 'react'
import '../css/PostListing.css'
import { useNavigate } from 'react-router-dom'
import {addDoc, collection} from "firebase/firestore"
import { db , auth} from '../config/firebase.js'
import { useAuthState } from "react-firebase-hooks/auth"

export default function PostListing() {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [housingOption, setHousingOption] = useState('Off-Campus')

  const [user] = useAuthState(auth)

  const today = new Date()
  const navigate = useNavigate()

  const listingsRef = collection(db, 'listing')

  const onCreatePost = async () => {
    if (!location || !description || !contact || !name) alert('Required fields: location, name, description, contact')
    else {
      await addDoc(listingsRef, {
        location: location,
        description: description,
        cost: cost,
        name: name,
        contact: contact,
        housingOption: housingOption,
        date: today.toLocaleDateString(),
        timestamp: Date.now(),
        userId: user.uid
      })

      navigate("/")
  }
  }

  return (
    <div className='post-listing'>
        <div className='inputs'>
            <select className='form-select' onChange={(e) => {setHousingOption(e.target.value)}}>
              <option value='Off-Campus'>Off-Campus</option>
              <option value='On-Campus'>On-Campus</option>
            </select>
            <input placeholder={housingOption === 'Off-Campus' ? 'Location (ex. The One, 109 Tower, etc)' : 'Location (ex. Parkview, Tamiami Hall, etc)'} onChange={(e) => {
                setLocation(e.target.value)
            }}></input>
            <textarea placeholder='Unit description, Move-in Dates, Rules, etc' onChange={(e) => {
                setDescription(e.target.value)
            }}></textarea>
            <input placeholder={housingOption === 'Off-Campus' ? 'Monthly Rate (ex. 1200, do not include $ sign)' : 'Semester cost (ex. 3200, do not include $ sign)'} onChange={(e) => {
                setCost(e.target.value)
            }}></input>
            <input placeholder='Your Name' onChange={(e) => {
                setName(e.target.value)
            }}></input>
            <input placeholder='Contact Info: (ex. Phone, E-mail, Instagram, etc)' onChange={(e) => {
                setContact(e.target.value)
            }}></input>
            <button className='post-btn' onClick={onCreatePost}>POST LISTING</button>
        </div>
    </div>
  )
}
