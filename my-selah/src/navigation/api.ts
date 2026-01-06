export type Pagination = {
  start: number;
  limit: number;
  total: number;
  has_more: boolean;
};

export type Verse = {
  id: string;
  number: number;
  text: string;
};

export type Scripture = {
  reference: string;
  verses: Verse[];
  pagination: Pagination;
};

export type DayResponse = {
  meta: {
    day: number;
    cached: boolean;
    generated_at: string;
  };
  content: {
    scripture: Scripture;
    theme?: string;
    tags?: string[];
    selah_reflection?: string;
  };
};
