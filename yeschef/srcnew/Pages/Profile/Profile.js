import React from 'react'
import Header from '../../Components/Header/Header'
import "./Profile.css"

function Profile() {
  return (
    <div className='profilepage'>
        <Header />
        <div className='profilelol'>
            <div className="pfpimage"><img src='https://avatars.githubusercontent.com/u/95217195?v=4'/></div>
            <div className='pfpcontent'>
                <h1 className='username'>Abhylmao</h1>
                <p className='aboutme'>👩‍🍳 Hey foodies! I'm Chef Abhy, your culinary tour guide! 🌍 With roots in Italy and a taste for global adventure, I blend diverse flavors to create tantalizing dishes. From sushi burritos to Thai tacos, I'm all about pushing culinary boundaries. Join me for behind-the-scenes kitchen magic and recipes to elevate your cooking! Let's savor the journey together! #ChefAbhyMagic 📸</p>
                <p className='contact'>Abhylmao@fakeemail.lol</p>
            </div>
        </div>
    </div>
  )
}

export default Profile