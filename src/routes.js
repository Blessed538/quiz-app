import DashboardIcon from "@material-ui/icons/Dashboard";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Profile from "./pages/Profile";
import TakeTest from './pages/TakeTest';


export const dashboardRoutes = {
  admin: [
    {
      path: "/app/taketest",
      name: "Take Test",
      icon: DashboardIcon,
      component: TakeTest,
      layout: "/admin",
    },
   
    {
      path: "/app/profile",
      name: "Profile",
      icon: WalletIcon,
      component: Profile,
      layout: "/admin",
    },
   
  ],
  user: [],
};
