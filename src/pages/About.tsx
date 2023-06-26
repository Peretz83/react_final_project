import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
  return (
 <>
 <div style={{marginBottom: 200}} className="min-vw-100 min-vh-100 py-4 signupWrap">
 <Title mainText='About us'/>

 <div className='my-4' style={{display: 'flex', justifyContent: 'center'}}>
  <img style={{width: 300,borderRadius:'5px'}} src="https://bcardextra.com/assets/images/products/45/bcardextra-digital-order-02.jpg" alt="bcard-logo" />
 </div>

<h1 style={{textAlign: 'center'}}>Welcome to Bcard!</h1>
 <h3 style={{width: '70%', margin: 'auto'}}>At Bcard, we believe in the power of connection and the potential of every individual. We've created a platform that allows users to effortlessly create and showcase their own unique business cards, helping them promote their skills, services, and businesses to a wider audience.</h3>

 <h2 style={{textAlign: 'center', marginTop: 50}}>Our Mission:</h2>
 <p style={{width: '70%', margin: 'auto'}}>Our mission is to empower professionals, entrepreneurs, and small business owners by providing them with a user-friendly platform to create stunning, professional-looking business cards. We aim to foster networking and collaboration by connecting talented individuals with potential clients, customers, and partners. With [Your Website Name], we strive to make a positive impact on the success and growth of businesses and professionals worldwide.</p>

 <h2 style={{textAlign: 'center', marginTop: 50}}>Why Choose Bcard:</h2>
 <div className='my-4' style={{display: 'flex', justifyContent: 'center'}}>
  <img style={{width: 300,}} src="https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg" alt="" />
 </div>
 <p style={{width: '70%', margin: 'auto'}}>
  Easy-to-Use Interface: We understand that not everyone has design expertise, which is why we've developed a user-friendly interface that allows anyone to create a beautiful business card in minutes. No complicated software or graphic design skills required!

  Easy-to-Use Interface: We understand that not everyone has design expertise, which is why we've developed a user-friendly interface that allows anyone to create a beautiful business card in minutes. No complicated software or graphic design skills required!

Customization Options: We believe in individuality, and that's why we offer a wide range of customization options. Tailor your business card to match your unique style, brand identity, or profession. Choose from various layouts, fonts, colors, and images to create a card that truly represents you and your business.

Extensive Templates Gallery: Don't know where to start? No worries! We provide a diverse collection of professionally designed templates to suit different industries and professions. Simply choose a template that resonates with you and customize it to make it your own.

Seamless Networking: Our platform not only allows you to create outstanding business cards but also provides opportunities to network with like-minded professionals. Connect with potential clients, partners, or collaborators, and expand your professional network effortlessly.

Mobile-Ready and Shareable: In today's fast-paced digital world, it's crucial to have a mobile-friendly presence. All business cards created on [Your Website Name] are fully optimized for mobile devices, ensuring that your information looks great no matter where it's viewed. Plus, easily share your business card across various platforms, including social media, email, or even through a unique URL.

Privacy and Security: We value your privacy and take it seriously. Rest assured that your personal information and business card designs are secure on our platform. We employ industry-standard security measures to protect your data.
 </p>

 <h5 style={{textAlign: 'center', width: '70%', margin: 'auto', marginTop: 50}}>We're excited to have you join our vibrant community of professionals and entrepreneurs on [Your Website Name]. Let us help you make a lasting impression with a stunning business card that reflects your unique identity. Sign up today and start connecting with the world!

</h5>
<p style={{width: '70%', margin: 'auto', marginTop: 100}}>If you have any questions, suggestions, or feedback, please don't hesitate to reach out to our friendly support team. We're here to assist you every step of the way.</p>

<div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}>
  <Link to='/'>
  <button className='btn btn-primary'>Back to home page</button></Link>
</div>

 </div>

 </>
)}

export default About

