import { SectionQuemSomos } from "@/components/sections/SectionQuemSomos";
import { SectionOQueFazemos } from "@/components/sections/SectionOQueFazemos";
import { SectionConteudos } from "@/components/sections/SectionConteudos";
import { SectionNossoMetodo } from "@/components/sections/SectionNossoMetodo";
import { SectionParaQuemE } from "@/components/sections/SectionParaQuemE";
import { SectionPorQueAuryaHub } from "@/components/sections/SectionPorQueAuryaHub";
import { SectionCTA } from "@/components/sections/SectionCTA";

export default function Home() {
  return (
    <>
      <SectionQuemSomos />
      <SectionOQueFazemos />
      <SectionConteudos />
      <SectionNossoMetodo />
      <SectionParaQuemE />
      <SectionPorQueAuryaHub />
      <SectionCTA />
    </>
  );
}
