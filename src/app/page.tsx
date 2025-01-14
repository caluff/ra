import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Paragraph} from "@/components/Paragraph";
import {Products} from "@/components/Products";
import {TechStack} from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Daniel Chaviano</Heading>
      <Paragraph className="max-w-xl mt-4">
        I capture the beauty of life through photography. Specializing in [specific
        photography genre], I tell stories with every shot. Whether it's a candid smile or a breathtaking landscape, my
        goal is to create images that inspire. Thank you for visiting my portfolio. Let&apos;s create something amazing
        together.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Feel free to adjust it as needed. If you need more help, just let me know!
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products/>
      <TechStack/>
    </Container>
  );
}
