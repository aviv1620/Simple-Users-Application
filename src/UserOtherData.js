import React from 'react'

export const UserOtherData = ({user}) => {
  return (
    <div>
        Street : {user?.address.street}<br/>
        City : {user?.address.city}<br/>
        Zip Code : {user?.address.zipcode}<br/>
    </div>
  )
}
