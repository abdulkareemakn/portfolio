/**
 * The Library. Only the confirmed entry is filled in. Add to `books` and
 * `shows` and their sections appear; empty lists render nothing.
 */
export interface Entry {
  title: string;
  by?: string;
  note?: string;
}

export const library = {
  quote: {
    text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    cite: "Jojen Reed, A Dance with Dragons",
  },
  reading: [
    { title: "A Dance with Dragons", by: "George R. R. Martin" },
  ] as Entry[],
  books: [] as Entry[],
  shows: [] as Entry[],
};
