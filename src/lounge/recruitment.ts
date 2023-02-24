export interface PostLoungeRecruitmentStudyAndTogetherCodeType {
  title: string;
  field: string;
  schedule: string;
  location: string;
  personnel: string;
  condition?: string[];
  explanation?: string;
  communication: string;
  link?: string[];
}

export interface PostLoungeRecruitmentProjectType {
  title: string;
  content: string;
  picture?: string;
  period: string;
  personnel: string;
  condition: string[];
  member?: string;
  communication: string;
  link?: string[];
}
