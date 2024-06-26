import { Route, Routes } from "react-router-dom"
import Dashboard from "./admin/Dashboard"
import AdminNavbar from "./admin/AdminNavbar"
import AdminSidebar from "./admin/AdminSidebar"
import AdminProduct from "./admin/AdminProduct"
import Favourite from "./admin/Favourite"
import Inbox from "./admin/Inbox"
import OrderList from "./admin/OrderList"
import Stock from "./admin/Stock"
import { useState } from "react"

const AdminLayout = () => {
  const [sideOpen, setSideOpen] = useState(true)

  // useEffect(()=>{
  //   if(window.innerWidth < 768) setSideOpen(false)
  // }, [window.innerWidth])
  // console.log(window.innerWidth)
  return (
    <div className="overflow-hidden h-screen">
      <div className="sticky top-0"><AdminNavbar setOpen={setSideOpen} isOpen={sideOpen} /></div>
      <div className="flex gap-7 h-full">
        <AdminSidebar isOpen={sideOpen} setOpen={setSideOpen} />
        <div className="bg-[#F5F6FA] flex-[6] pt-8 px-6 overflow-y-scroll h-full custom-scrollbar ">
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='product' element={<AdminProduct />} />
            <Route path='favourites' element={<Favourite />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path='order-list' element={<OrderList />} />
            <Route path='stock' element={<Stock />} />
          </Routes> 
      </div>
      </div>
    </div>
  )
}

export default AdminLayout
{/* <Routes>
        <Route path='dashboard' element={<Dashboard />} />
      </Routes> */}

      