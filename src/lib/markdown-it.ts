import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default async (fixtures: string[]) => {
  return fixtures.map((fixture) => md.render(fixture));
};
