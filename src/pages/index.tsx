import { FaBeer } from "react-icons/fa";

import Button from "src/components/Button";
import MediaMatch from "src/components/MediaMatch";

export default function Home() {
  return (
    <>
      <MediaMatch greaterThan="small">Desktop</MediaMatch>
      <MediaMatch lessThan="small">Mobile</MediaMatch>
      <Button size="large" icon={<FaBeer />}>
        OK
      </Button>
    </>
  );
}
