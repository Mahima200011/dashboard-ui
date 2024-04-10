import React from "react";
// import { FaHome, FaFlask, FaCalendarAlt, FaMedkit, FaEnvelope, FaMoneyBill, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <nav className='navbar navbar-inverse visible-xs'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='#myNavbar'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>

            <a className='navbar-brand logo ' href='#'>
              Guvi sales
            </a>
          </div>

          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-inxs '>
              <li>
                <a href='#section2 Dashboard'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    full='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z' />
                    <path d='M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z' />
                    <path d='M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z' />
                    <path d='M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z' />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='clipboard-tick'>
                      <g id='clipboard-tick_2'>
                        <g id='clipboard-tick_3'>
                          <path
                            id='Vector'
                            d='M15.73 3.87519L15.73 3.87519V3.88V4.82C15.73 5.58386 15.1139 6.2 14.35 6.2H9.64001C8.87615 6.2 8.26001 5.58386 8.26001 4.82V3.88C8.26001 3.11959 8.88269 2.5 9.65001 2.5H14.35C15.1183 2.5 15.7373 3.11947 15.73 3.87519Z'
                            stroke='black'
                          />
                          <path
                            id='Vector_2'
                            d='M14.35 8.21001C16.2161 8.21001 17.74 6.68615 17.74 4.82001C17.74 4.65347 17.9251 4.51922 18.1077 4.61278C19.3589 5.27946 20.21 6.6023 20.21 8.12001V17.53C20.21 19.7139 18.4238 21.5 16.24 21.5H7.75998C5.57612 21.5 3.78998 19.7139 3.78998 17.53V8.12001C3.78998 6.60229 4.64111 5.27945 5.8923 4.61277C6.07484 4.51923 6.25998 4.65348 6.25998 4.82001C6.25998 6.68615 7.78383 8.21001 9.64998 8.21001H14.35ZM11.6935 17.0836L15.6935 13.0836C16.1788 12.5983 16.1788 11.8017 15.6935 11.3165C15.2083 10.8312 14.4117 10.8312 13.9264 11.3165L10.81 14.4329L10.1935 13.8165C9.70827 13.3312 8.91169 13.3312 8.42642 13.8165C7.94116 14.3017 7.94116 15.0983 8.42642 15.5836L9.92642 17.0836C10.1751 17.3323 10.4945 17.45 10.81 17.45C11.1254 17.45 11.4448 17.3323 11.6935 17.0836Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Lab Test
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='calendar-tick'>
                      <g id='calendar-tick_2'>
                        <g id='calendar-tick_3'>
                          <path
                            id='Vector'
                            d='M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z'
                            stroke='black'
                          />
                          <path
                            id='Vector_2'
                            d='M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z'
                            stroke='black'
                          />
                          <path
                            id='Vector_3'
                            d='M20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H12.93C13.62 22 14.1 21.33 13.88 20.68C13.68 20.1 13.51 19.46 13.51 19C13.51 15.97 15.98 13.5 19.01 13.5C19.3 13.5 19.59 13.52 19.87 13.57C20.47 13.66 21.01 13.19 21.01 12.59V10.85C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.02 18.39 8.76 18.5 8.5 18.5C8.24 18.5 7.98 18.39 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.49 16.42 8.93 16.51 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.16 14.75 9.11 14.79 9.06 14.83C9 14.87 8.94 14.9 8.88 14.92C8.82 14.95 8.76 14.97 8.7 14.98C8.63 14.99 8.56 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.02 13.06 8.37 12.95 8.7 13.02C8.76 13.03 8.82 13.05 8.88 13.08C8.94 13.1 9 13.13 9.06 13.17C9.11 13.21 9.16 13.25 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 14.71C12.52 14.89 12.26 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Appointment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='bag-tick-2'>
                      <g id='bag-tick-2_2'>
                        <g id='bag-tick-2_3'>
                          <path
                            id='Vector'
                            d='M19.96 8.96001C19.29 8.22001 18.28 7.79001 16.88 7.64001V6.88001C16.88 5.51001 16.3 4.19001 15.28 3.27001C14.25 2.33001 12.91 1.89001 11.52 2.02001C9.12999 2.25001 7.11999 4.56001 7.11999 7.06001V7.64001C5.71999 7.79001 4.70999 8.22001 4.03999 8.96001C3.06999 10.04 3.09999 11.48 3.20999 12.48L3.90999 18.05C4.11999 20 4.90999 22 9.20999 22H14.79C19.09 22 19.88 20 20.09 18.06L20.79 12.47C20.9 11.48 20.93 10.04 19.96 8.96001ZM11.66 3.41001C12.66 3.32001 13.61 3.63001 14.35 4.30001C15.08 4.96001 15.49 5.90001 15.49 6.88001V7.58001H8.50999V7.06001C8.50999 5.28001 9.97999 3.57001 11.66 3.41001ZM12 18.58C9.90999 18.58 8.20999 16.88 8.20999 14.79C8.20999 12.7 9.90999 11 12 11C14.09 11 15.79 12.7 15.79 14.79C15.79 16.88 14.09 18.58 12 18.58Z'
                            stroke='black'
                          />
                          <path
                            id='Vector_2'
                            d='M11.43 16.64C11.24 16.64 11.05 16.57 10.9 16.42L9.91 15.43C9.62 15.14 9.62 14.66 9.91 14.37C10.2 14.08 10.68 14.08 10.97 14.37L11.45 14.85L13.05 13.37C13.35 13.09 13.83 13.11 14.11 13.41C14.39 13.71 14.37 14.19 14.07 14.47L11.94 16.44C11.79 16.57 11.61 16.64 11.43 16.64Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Medicine Order
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='sms'>
                      <g id='sms_2'>
                        <g id='sms_3'>
                          <path
                            id='Vector'
                            d='M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Message
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='empty-wallet'>
                      <g id='empty-wallet_2'>
                        <g id='empty-wallet_3'>
                          <path
                            id='Vector'
                            d='M14.85 3.95V7.75H13.35V3.95C13.35 3.68 13.11 3.55 12.95 3.55C12.9 3.55 12.85 3.56 12.8 3.58L4.87 6.57C4.34 6.77 4 7.27 4 7.84V8.51C3.09 9.19 2.5 10.28 2.5 11.51V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C12.5 2.09 12.73 2.05 12.95 2.05C13.95 2.05 14.85 2.86 14.85 3.95Z'
                            stroke='black'
                          />
                          <path
                            id='Vector_2'
                            d='M21.5 14.5V15.5C21.5 15.77 21.29 15.99 21.01 16H19.55C19.02 16 18.54 15.61 18.5 15.09C18.47 14.78 18.59 14.49 18.79 14.29C18.97 14.1 19.22 14 19.49 14H21C21.29 14.01 21.5 14.23 21.5 14.5Z'
                            fill='#131313'
                          />
                          <path
                            id='Vector_3'
                            d='M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Payment
                </a>
              </li>
              <li>
                <a href='#section3'>
                  <svg
                    className='sidebar-icon'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='setting-2'>
                      <g id='setting-2_2'>
                        <g id='setting-2_3'>
                          <path
                            id='Vector'
                            d='M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z'
                            stroke='black'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='col-sm-2 sidenav hidden-xs '>
        <h2 className='logo '>guvi sales</h2>
        <ul className='nav nav-pills nav-stacked '>
          <li>
            <a href='#section2'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                full='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z' />
                <path d='M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z' />
                <path d='M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z' />
                <path d='M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z' />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='clipboard-tick'>
                  <g id='clipboard-tick_2'>
                    <g id='clipboard-tick_3'>
                      <path
                        id='Vector'
                        d='M15.73 3.87519L15.73 3.87519V3.88V4.82C15.73 5.58386 15.1139 6.2 14.35 6.2H9.64001C8.87615 6.2 8.26001 5.58386 8.26001 4.82V3.88C8.26001 3.11959 8.88269 2.5 9.65001 2.5H14.35C15.1183 2.5 15.7373 3.11947 15.73 3.87519Z'
                        stroke='black'
                      />
                      <path
                        id='Vector_2'
                        d='M14.35 8.21001C16.2161 8.21001 17.74 6.68615 17.74 4.82001C17.74 4.65347 17.9251 4.51922 18.1077 4.61278C19.3589 5.27946 20.21 6.6023 20.21 8.12001V17.53C20.21 19.7139 18.4238 21.5 16.24 21.5H7.75998C5.57612 21.5 3.78998 19.7139 3.78998 17.53V8.12001C3.78998 6.60229 4.64111 5.27945 5.8923 4.61277C6.07484 4.51923 6.25998 4.65348 6.25998 4.82001C6.25998 6.68615 7.78383 8.21001 9.64998 8.21001H14.35ZM11.6935 17.0836L15.6935 13.0836C16.1788 12.5983 16.1788 11.8017 15.6935 11.3165C15.2083 10.8312 14.4117 10.8312 13.9264 11.3165L10.81 14.4329L10.1935 13.8165C9.70827 13.3312 8.91169 13.3312 8.42642 13.8165C7.94116 14.3017 7.94116 15.0983 8.42642 15.5836L9.92642 17.0836C10.1751 17.3323 10.4945 17.45 10.81 17.45C11.1254 17.45 11.4448 17.3323 11.6935 17.0836Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Lab Test
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='calendar-tick'>
                  <g id='calendar-tick_2'>
                    <g id='calendar-tick_3'>
                      <path
                        id='Vector'
                        d='M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z'
                        stroke='black'
                      />
                      <path
                        id='Vector_2'
                        d='M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z'
                        stroke='black'
                      />
                      <path
                        id='Vector_3'
                        d='M20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H12.93C13.62 22 14.1 21.33 13.88 20.68C13.68 20.1 13.51 19.46 13.51 19C13.51 15.97 15.98 13.5 19.01 13.5C19.3 13.5 19.59 13.52 19.87 13.57C20.47 13.66 21.01 13.19 21.01 12.59V10.85C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.02 18.39 8.76 18.5 8.5 18.5C8.24 18.5 7.98 18.39 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.49 16.42 8.93 16.51 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.16 14.75 9.11 14.79 9.06 14.83C9 14.87 8.94 14.9 8.88 14.92C8.82 14.95 8.76 14.97 8.7 14.98C8.63 14.99 8.56 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.02 13.06 8.37 12.95 8.7 13.02C8.76 13.03 8.82 13.05 8.88 13.08C8.94 13.1 9 13.13 9.06 13.17C9.11 13.21 9.16 13.25 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 14.71C12.52 14.89 12.26 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Appointment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='bag-tick-2'>
                  <g id='bag-tick-2_2'>
                    <g id='bag-tick-2_3'>
                      <path
                        id='Vector'
                        d='M19.96 8.96001C19.29 8.22001 18.28 7.79001 16.88 7.64001V6.88001C16.88 5.51001 16.3 4.19001 15.28 3.27001C14.25 2.33001 12.91 1.89001 11.52 2.02001C9.12999 2.25001 7.11999 4.56001 7.11999 7.06001V7.64001C5.71999 7.79001 4.70999 8.22001 4.03999 8.96001C3.06999 10.04 3.09999 11.48 3.20999 12.48L3.90999 18.05C4.11999 20 4.90999 22 9.20999 22H14.79C19.09 22 19.88 20 20.09 18.06L20.79 12.47C20.9 11.48 20.93 10.04 19.96 8.96001ZM11.66 3.41001C12.66 3.32001 13.61 3.63001 14.35 4.30001C15.08 4.96001 15.49 5.90001 15.49 6.88001V7.58001H8.50999V7.06001C8.50999 5.28001 9.97999 3.57001 11.66 3.41001ZM12 18.58C9.90999 18.58 8.20999 16.88 8.20999 14.79C8.20999 12.7 9.90999 11 12 11C14.09 11 15.79 12.7 15.79 14.79C15.79 16.88 14.09 18.58 12 18.58Z'
                        stroke='black'
                      />
                      <path
                        id='Vector_2'
                        d='M11.43 16.64C11.24 16.64 11.05 16.57 10.9 16.42L9.91 15.43C9.62 15.14 9.62 14.66 9.91 14.37C10.2 14.08 10.68 14.08 10.97 14.37L11.45 14.85L13.05 13.37C13.35 13.09 13.83 13.11 14.11 13.41C14.39 13.71 14.37 14.19 14.07 14.47L11.94 16.44C11.79 16.57 11.61 16.64 11.43 16.64Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Medicine Order
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='sms'>
                  <g id='sms_2'>
                    <g id='sms_3'>
                      <path
                        id='Vector'
                        d='M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Message
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='empty-wallet'>
                  <g id='empty-wallet_2'>
                    <g id='empty-wallet_3'>
                      <path
                        id='Vector'
                        d='M14.85 3.95V7.75H13.35V3.95C13.35 3.68 13.11 3.55 12.95 3.55C12.9 3.55 12.85 3.56 12.8 3.58L4.87 6.57C4.34 6.77 4 7.27 4 7.84V8.51C3.09 9.19 2.5 10.28 2.5 11.51V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C12.5 2.09 12.73 2.05 12.95 2.05C13.95 2.05 14.85 2.86 14.85 3.95Z'
                        stroke='black'
                      />
                      <path
                        id='Vector_2'
                        d='M21.5 14.5V15.5C21.5 15.77 21.29 15.99 21.01 16H19.55C19.02 16 18.54 15.61 18.5 15.09C18.47 14.78 18.59 14.49 18.79 14.29C18.97 14.1 19.22 14 19.49 14H21C21.29 14.01 21.5 14.23 21.5 14.5Z'
                        fill='#131313'
                      />
                      <path
                        id='Vector_3'
                        d='M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Payment
            </a>
          </li>
          <li>
            <a href='#section3'>
              <svg
                className='sidebar-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='setting-2'>
                  <g id='setting-2_2'>
                    <g id='setting-2_3'>
                      <path
                        id='Vector'
                        d='M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z'
                        stroke='black'
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
