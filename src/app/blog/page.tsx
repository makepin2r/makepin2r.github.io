import { getPage } from "@/libs/notion/notion";
import Renderer from "@/components/postDetail/Renderer";

export default async function BlogPage() {
  const recordMap = await getPage("1bc0f703440580a6bbe7ffc4baaacb2c");

  return <>{!!recordMap && <Renderer recordMap={recordMap} />}</>;
}
