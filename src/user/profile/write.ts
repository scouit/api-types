export type DateType =
  | {
      year: number;
      month: number;
      day: number;
    }
  | undefined;

export type QueryProfileWriteType =
  | 'basic'
  | 'introduce'
  | 'work-experience'
  | 'project'
  | 'technology'
  | 'activity'
  | 'education';

export interface PatchProfileWriteRequestType {
  basic?: BasicType;
  technology?: TechnologyType;
  activity?: ActivityType[];
  education?: EducationType[];
  project?: ProjectType[];
  workExperience?: WorkExperienceType[];
}

export interface BasicType {
  name: string;
  image?: string;
  simple?: string;
  complex?: string;
  role?: string;
}

export interface TechnologyType {
  main?: string[];
  sub?: string[];
}

export interface ActivityType {
  name: string;
  content?: string;
  startDate: DateType;
  endDate: DateType;
}

export interface EducationType {
  name: string;
  startDate: DateType;
  endDate: DateType;
}

export interface ProjectType {
  name: string;
  introduce?: string;
  startDate: DateType;
  endDate: DateType;
  url?: string[];
  works?: string[];
  skills: string[];
  images?: string[];
}

export interface WorkExperienceType {
  name: string;
  startDate: DateType;
  endDate: DateType;
  role?: string;
  works?: string[];
}
