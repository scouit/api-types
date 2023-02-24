export type QueryProfileWriteType =
  | 'basic'
  | 'introduce'
  | 'work-experience'
  | 'project'
  | 'technology'
  | 'activity'
  | 'education';

export interface PatchProfileWriteRequestType {
  introduce?: IntroduceType;
  basic: BasicType;
  technology: TechnologyType;
  activity?: ActivityType[];
  education?: EducationType[];
  project?: ProjectType[];
  workExperience: WorkExperienceType[];
}

export interface IntroduceType {
  simple?: string;
  complex?: string;
}

export interface BasicType {
  role?: string;
}

export interface TechnologyType {
  main?: string[];
  sub?: string[];
}

export interface ActivityType {
  name: string;
  content?: string;
  period: string;
}

export interface EducationType {
  name: string;
  period: string;
}

export interface ProjectType {
  name: string;
  introduce?: string;
  period: string;
  url?: string[];
  works?: string[];
  skills: string[];
  images?: string[];
}

export interface WorkExperienceType {
  name: string;
  period: string;
  role?: string;
  works?: string[];
}
