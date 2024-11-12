import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Static() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/segment/static/basic");
  }, []);

  return null;
}
