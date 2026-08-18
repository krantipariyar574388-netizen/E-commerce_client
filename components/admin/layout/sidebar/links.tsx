import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

const links : { label : string, path : string, id : string, icon : React.ReactNode}[] = [
    {
      label : "Dashboard",
    path : "/admin",
    id : "dashboard",
    icon : <RxDashboard />
  },
  {
      label : "Brands",
    path : "/admin/brands",
    id : "brands",
    icon : <RxDashboard />
  },
  {
      label : "Categories",
    path : "/admin/categories",
    id : "categories",
    icon : <RxDashboard />
  },{
      label : "Products",
    path : "/admin/products",
    id : "products",
    icon : <RxDashboard />
  },
  {
   label : "Users",
    path : "/admin/users",
    id : "users",
    icon : <RxDashboard />
  }
]

const SidebarLinks = () => {
  return (
    <div className="py-1 flex gap-2 flex-col">
        {
            links.map((item) => <SidebarItem key={item.id} item={item}/>)
        }
    </div>
  )
}

export default SidebarLinks

const SidebarItem = ({item : { label, path, icon }} : {item : {label : string, path : string, id : string, icon : React.ReactNode}}) => {
  return (
    <Link href={path}>
      <div className="flex gap-1 items-center border border-gray-300 rounded px-1 py-3">
        {icon}
        <p>{label}</p>
      </div>
    </Link>
  )
}