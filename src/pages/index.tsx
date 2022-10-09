import Banner from "src/components/Banner";
import { bannerMock } from "src/mocks/banner";

export default function Home() {
  return (
    <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
      <Banner
        {...bannerMock}
        ribbon="20% off"
        ribbonCollor="primary"
        ribbonSize="normal"
      />
    </div>
  );
}
