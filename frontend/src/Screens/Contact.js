import React, { useState } from 'react'
import './Contact.css'

function Contact () {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    message: ''
  })
  let name, value
  const postUserData = event => {
    name = event.target.name
    value = event.target.value

    setUserData({ ...userData, [name]: value })
  }
  //   connect with Firebase
  const submitData = async event => {
    event.preventDefault()
    const { firstName, lastName, number, email, message } = userData
    if (firstName && lastName && number && email && message) {
      const res = fetch(
        'https://chhule-gagan-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            number,
            email,
            message
          })
        }
      )
      if (res) {
        setUserData({
          firstName: '',
          lastName: '',
          number: '',
          email: '',
          message: ''
        })
        alert('Sent to the Admin!')
      } else {
        alert('Enter the Required Details!')
      }
    } else {
      alert('Enter the Required Details!')
    }
  }
  return (
    <div>
      <div class='container contact'>
        <div class='row'>
          <div class='col-md-3'>
            <div class='contact-info'>
              <img
                src='https://image.ibb.co/kUASdV/contact-image.png'
                alt='image'
              />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div class='col-md-9 shadow'>
            <form method='POST'>
              <div class='contact-form'>
                <div class='form-group'>
                  {/* <label class="control-label col-sm-2" for="fname">First Name:</label> */}
                  <div class='col-sm-10'>
                    <input
                      type='text'
                      class='form-control'
                      id='fname'
                      placeholder='Enter First Name'
                      name='firstName'
                      value={userData.firstName}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <br />
                <div class='form-group'>
                  {/* <label class="control-label col-sm-2" for="lname">Last Name:</label> */}
                  <div class='col-sm-10'>
                    <input
                      type='text'
                      class='form-control'
                      id='lname'
                      placeholder='Enter Last Name'
                      name='lastName'
                      value={userData.lastName}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <br />
                <div class='form-group'>
                  {/* <label class="control-label col-sm-2" for="email">Email:</label> */}
                  <div class='col-sm-10'>
                    <input
                      type='number'
                      class='form-control'
                      id='number'
                      placeholder='Enter Contact Number'
                      name='number'
                      value={userData.number}
                      onChange={postUserData}
                      min='1000000000'
                    />
                  </div>
                </div>
                <br />
                <div class='form-group'>
                  {/* <label class="control-label col-sm-2" for="email">Email:</label> */}
                  <div class='col-sm-10'>
                    <input
                      type='email'
                      class='form-control'
                      id='email'
                      placeholder='Enter email'
                      name='email'
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <br />
                <div class='form-group'>
                  {/* <label class="control-label col-sm-2" for="comment">Comment:</label> */}
                  <div class='col-sm-10'>
                    <textarea
                      class='form-control'
                      rows='5'
                      id='comment'
                      placeholder='Enter your Query Here!'
                      name='message'
                      value={userData.message}
                      onChange={postUserData}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div class='form-group'>
                  <div class='col-sm-offset-2 col-sm-10'>
                    <button
                      type='submit'
                      class='btn btn-default'
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
