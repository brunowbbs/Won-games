import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Menu from "src/components/Menu";
import { bannerMock } from "src/mocks/banner";

export default function Home() {
  return <Banner {...bannerMock} title="Wes" />;
}
