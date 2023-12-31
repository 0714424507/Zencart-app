import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
// import YourOrders from '../../components/UserProfile/YourOrders'
// import UserAddress from '../../componentsUserProfile/UserAddress'

import TopLayout from '../TopLayout'
const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>     
        <TopLayout/>
      
         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
               {activepage === 'changepassword' && <ChangePassword/>}
                {/* {activepage === 'yourorders' && <YourOrders/>} */}
                {/* {activepage === 'address' && <UserAddress/>}  */}
               
            </div>
         </div>
        </div>
  )
}

export default UserProfile