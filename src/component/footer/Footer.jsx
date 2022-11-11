import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footer-bg'>
    <div className='container'>
        <div className='row d-flex'>
        <div className='col-md-3 mt-5 '>
        <ul className='ml-3 list'>
        <h5 className='ul-h5'>About</h5>
            <li className=''>
            <a href=''><span className='ul-a'>Contact</span></a>
            </li>
            <li>
            <a href=''>Brand</a>
            </li>
            <li>
            <a href=''>Blog</a>
            </li>
            <li>
            <a href=''>Community</a>
            </li>
            <li>
            <a href=''>Litepaper</a>
            </li>
            <li>
            <a href=''>Online Store</a>
            </li>
        </ul>
        </div>
        <div className='col-md-3 mt-5'>
        <ul className='ml-3 list'>
        <h5 className='ul-h5'>HELP</h5>
            <li className=''>
            <a href=''>Customer Support</a>
            </li>
            <li>
            <a href=''>Troubleshooting</a>
            </li>
            <li>
            <a href=''>Guides</a>
            </li>
        </ul>
        </div>
        <div className='col-md-3 mt-5'>
        <ul className='ml-3 list'>
        <h5 className='ul-h5'>DEVELOPERS</h5>
            <li className=''>
            <a href=''>Github</a>
            </li>
            <li>
            <a href=''>Documentation</a>
            </li>
            <li>
            <a href=''>Bug Bounty</a>
            </li>
            <li>
            <a href=''>Audits</a>
            </li>
            <li>
            <a href=''>Careers</a>
            </li>
        </ul>
        </div>

        <div className='col-md-3 mt-5'>
        </div>
        </div>
        <div className='col-md-3'>
    <div className='mx-4 d-flex justify-content-around  icon-bg'>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-telegram"></i>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-reddit-alien"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
        </div>
    </div>
    <hr/>
    </div>
    </div>
    </>
  )
}

export default Footer