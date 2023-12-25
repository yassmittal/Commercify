import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return <h1>Product Page - ID: {id}</h1>;
}
