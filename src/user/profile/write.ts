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
    oneLineIntroduction: string;
    aboutMe: string;
  };
  activity?: {
    name: string;
    content: string;
  };
  education?: {
    name: string;
    period: Date;
  };
  project?: {
    name: string;
    introduce: string;
    period: Date;
    URL: string[];
    detailedWork: string;
  };
}
