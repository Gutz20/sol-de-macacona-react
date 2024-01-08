import { Outlet } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "..";
import { useAuthStore } from "@/store";
import { getCurrentUserRequest } from "@/api/auth";
import { useEffect } from "react";
import { HeaderAdmin } from "../HeaderAdmin";

const AdminLayout = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  // const getUserInfo = getCurrentUserRequest();

  useEffect(() => {
    getUserInfo();

    async function getUserInfo() {
      try {
        if (
          !(user.username !== "" && user.email !== "" && user.password !== "")
        ) {
          const userInfo = await getCurrentUserRequest();
          setUser(userInfo.data);
        }
      } catch (error) {}
    }
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6 bg-slate-900">
      <Sidebar />
      <div className="xl:col-span-5">
        <HeaderAdmin />
        <div className="h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default AdminLayout;
