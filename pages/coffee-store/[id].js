import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>Coffee Store Page {router.query.id}</div>;
};

export default CoffeeStore;
