/**
 * Content that is his to choose. Anything unset is simply not rendered:
 * nothing on the site is a placeholder.
 */
export const site = {
  /**
   * The Home quote. Leave null until he picks one; the section is omitted.
   * Shape: { text: "…", cite: "Author, Source" }
   */
  homeQuote: null as { text: string; cite?: string } | null,
};
