export interface PostSignInReqeustType {
  email: string;
  password: string;
}

export interface PostSignInResponseType {
  access_token: string;
  refresh_token: string;
}
