import React, { useEffect, useState } from 'react'
import '../css/HomePage.css'
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase.js"
import Listing from '../components/Listing'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../config/firebase.js'
// import { signOut } from "firebase/auth"
import Modal from '../components/Modal'
import Footer from '../components/Footer'

export default function HomePage() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [housingOption, setHousingOption] = useState('All')
  const [triggerModal, setTriggerModal] = useState(false)
  const [deletedId, setDeletedId] = useState('')

  const [user] = useAuthState(auth)

  const listingsRef = collection(db, "listing")

  const getListings = async () => {
    const data = await getDocs(listingsRef)
    setListings(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

 /*  
  const signUserOut = async () => {
    await signOut(auth)
  } 
 */

  const deletePost = async (id) => {
    const postDoc = doc(db, 'listing', id)
    await deleteDoc(postDoc)

    setTriggerModal((prevState) => !prevState)

    setListings(searchFilterd.filter((listing) => listing.id !== postDoc.id))
  }

  const popUp = (id) => {
    setDeletedId(id) 
    setTriggerModal((prevState) => !prevState)
  }

  useEffect(() => {
    getListings()
  }, [])

  const optionFiltered = housingOption === 'All' ? listings : listings.filter((listing) => listing.housingOption === housingOption)

  const searchFilterd = optionFiltered.filter(listing => listing.location.toLowerCase().includes(search.toLowerCase()))
  .sort((x, y) => y.timestamp - x.timestamp)

  return (
    <div className='homepage'>
      {triggerModal && <Modal popUp={popUp} deletePost={deletePost} deletedId={deletedId}/>}
      <div className='top-section'>
          <input placeholder='Search key words (ex. The One, etc)' onChange={(e) => {
            setSearch(e.target.value)
          }}></input>
      </div>
     <Link to={user ? '/postListing' : '/login'}><button className='add-post'>Add Post +</button></Link>
     <select onChange={(e) => setHousingOption(e.target.value)}>
          <option value='All'>All</option>
          <option value='Off-Campus'>Off-Campus</option>
          <option value='On-Campus'>On-Campus</option>
     </select>
      <div className='listings'>
          {searchFilterd.length !== 0 ? searchFilterd.map((listing) => <Listing listing={listing} popUp={popUp} key={listing.id}/>) : <h1 className='no-listings'>No listings found...</h1>}
      </div>
      {/* <button onClick={signUserOut}>Sign out</button> */}
    </div>
    
  )
}