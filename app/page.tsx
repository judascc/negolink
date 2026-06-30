import Banner from "@/components/Banner";
import DashboardLayout from "../components/DashboardLayout";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import Categories from "@/components/Categories";
import Trends from "@/components/Trends";

export default function Home() {
  return (
    <DashboardLayout>
      <h1>Bienvenido a Negolink</h1>
      <Banner />
      <FeaturedBusinesses />
      <Categories />
      <Trends />
    </DashboardLayout>
  );
}