import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [seacrchParams] = useSearchParams();
  const lat = seacrchParams.get("lat");
  const lng = seacrchParams.get("lng");

  return [lat, lng];
}
