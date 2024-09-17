import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-post";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <>
      <Container>
        <MainNav className=""/>
        <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
          <div>
            <LatestPosts />
          </div>
        </main>
      </Container>
    </>
  );
}
