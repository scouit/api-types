export interface PostSignInReqeustType {
  access_token: string;
  refresh_token: string;
}

export interface PostSignInResponseType {
  access_token: string;
  refresh_token: string;
}

export interface PostSignUpReqeustType {
  name: string;
  email: string;
  password: string;
}

export interface PostSignUpResponseType {
  access_token: string;
  refresh_token: string;
}
