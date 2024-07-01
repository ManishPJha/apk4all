import { slug } from "github-slugger";
import { marked } from "marked";

export const slugify = (content: string) => {
  if (!content) return null;

  return slug(content);
};

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | " h6" | "p";

export const markdownify = (
  content: string,
  tag: "div" | "span" | "time" | Headings,
  className: string
) => {
  if (!content) return null;

  const Tag = tag as unknown as any;

  return tag ? (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          tag === "div" ? marked.parse(content) : marked.parseInline(content),
      }}
    />
  ) : (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: marked.parseInline(content),
      }}
    />
  );
};

export const humanizeSlug = (value: string) => {
  if (!value) return null;

  return value
    .replace(/^[\s_]+|[\s_]+$/g, "") // Remove leading/trailing spaces or underscores
    .replace(/[_-\s]+/g, " ") // Replace underscores, hyphens, and spaces with a single space
    .replace(/\b\w/g, function (m) {
      // Capitalize the first letter of each word
      return m.toUpperCase();
    });
};

export const humanize = (content: string) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "") // Remove leading/trailing spaces or underscores
    .replace(/[_\s]+/g, " ") // Replace underscores and spaces with a single space
    .replace(/^[a-z]/, function (m) {
      // Capitalize the first letter of entire word
      return m.toUpperCase();
    });
};

export const htmlEntityDecoder = (htmlWithEntities: string) => {
  let entityList: { [key: string]: string } = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

export const htmlEntityEncoder = (text: string) => {
  const entityList: { [key: string]: string } = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return text.replace(/[<>&"']/g, (char) => entityList[char]);
};
