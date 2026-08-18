import React from 'react'

const links : { label : string, path : string, id : string, icon : React.ReactNode}[] = [
    label : "Dashboard",
    path : "/admin",
    id : "dashboard",
    icon : <RiDashboardLine />
]

const SidebarLinks = () => {
  return (
    <div>
        {
            links.map((item) => <SidebarItem key = {item.id}></SidebarItem>)
        }
    </div>
  )
}

export default SidebarLinks

const SidebarItem = ({item : { label, path, icon }} : {label : string, path : string, id : string, icon : React.ReactNode})