/**
 * Training. Only confirmed facts are filled in. Every optional field below is
 * simply not rendered until it has a value.
 */
export const training = {
  bench: {
    goalKg: 100,
    /** Current best bench in kg. Set it and a progress bar appears. */
    currentKg: null as number | null,
  },

  /** The six-day split, one entry per training day, e.g. { day: "Mon", focus: "…" }. */
  split: [] as { day: string; focus: string }[],

  /**
   * Weight loss, as a trend only. Each point is the change in kg since the
   * start (negative is lost). Never store or show an absolute body weight.
   */
  weightTrend: [] as { date: string; changeKg: number }[],

  /** ISO date (YYYY-MM-DD) the no-sugar diet began. Set it and a streak appears. */
  sugarFreeSince: null as string | null,
};
