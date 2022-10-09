import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import Menu from "src/components/Menu";
import Raibbon from "src/components/Ribbon";
import { bannerMock } from "src/mocks/banner";

export default function Home() {
  return (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#888",
      }}
    >
      <Raibbon color="primary" size="small">
        Best seller
      </Raibbon>
    </div>
  );
}
