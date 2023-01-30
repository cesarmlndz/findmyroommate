import React, { useState } from 'react'
import '../css/Listing.css'
import { db } from "../config/firebase.js"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../config/firebase.js'
import trash from '../icons/trash.png'
import { deleteDoc, doc } from 'firebase/firestore'

export default function Listing(props) {
  const { listing, popUp } = props

  const [user] = useAuthState(auth)

  return (
    <>
      <div className='listing'>
          <h2 className='location'>{listing.location} &#x2022; FIU</h2>
          <h3 className='description'>{listing.description}</h3>
          <h2 className='cost'>${listing.housingOption === 'Off-Campus' ? listing.cost.toLocaleString() + ' / month' : listing.cost.toLocaleString() + ' / semester'}</h2>
          <h3 className='name'>Posted By: {listing.name} on {listing.date}</h3>
          <h3 className='contact'>Contact: {listing.contact}</h3>
          {user?.uid === listing.userId ? <img className='trash' src={trash} onClick={() => popUp(listing.id)}/> : <></>}
      </div>
      {/* {triggerModal && <Modal setTriggerModal={setTriggerModal} triggerModal={triggerModal} popUp={popUp} listingId={listing.id}/>} */}
    </>
  )
}