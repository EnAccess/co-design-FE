import React from "react";
import Block from "../components/Block";
import { getGroup } from "@/data/basic-tools";

const ToolsResource = ({ tools }: any) => {
  return (
    <section className="mt-10 flex gap-y-8 px-8 flex-wrap">
      {tools?.map((data: any, i: any) => (
        <div key={`${data.title}-${i}`} className="w-1/2 px-4 h-1/2">
          <Block
            title={data.title}
            description={data.description}
            entries={data.entries}
          />
        </div>
      ))}
    </section>
  );
};

export default ToolsResource;

export async function getStaticProps() {
  const tools = await getGroup();
  return {
    props: {
      tools,
    },
  };
}
