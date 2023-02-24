export type QueryProfileWriteType =
  | 'basic'
  | 'introduce'
  | 'work-experience'
  | 'project'
  | 'technology'
  | 'activity'
  | 'education';

export interface PatchProfileWriteRequestType {
  introduce?: {
    simple?: string;
    complex?: string;
  };
  basic: {
    role?: string;
  };
  technology: {
    main?: string[];
    sub?: string[];
  };
  activity?: {
    name: string;
    content?: string;
    period: string;
  }[];
  education?: {
    name: string;
    period: string;
  }[];
  project?: {
    name: string;
    introduce?: string;
    period: string;
    url?: string[];
    works?: string[];
    skills: string[];
    images?: string[];
  }[];
  workExperience: {
    name: string;
    period: string;
    role?: string;
    works?: string[];
  }[];
}
