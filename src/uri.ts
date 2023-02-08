type Status = '/status';

type BackEndAuth = '/auth' | '/sign-in' | '/sign-up';
// type FrontEndAuth = '/auth/sign-in' | '/auth/sign-up';
// type Auth = FrontEndAuth | BackEndAuth;

type BackEndUser = '/user' | '/profile' | '/profile/list';
// type FrontEndUser = '/user/profile' | '/user/profile/list';
// type User = BackEndUser | FrontEndUser;

type BackEndCompany = '/company' | '/profile' | '/profile/list';
// type FrontEndCompany = '/company/profile' | '/company/profile/list';
// type Company = BackEndCompany | FrontEndCompany;

type BackEndUri = BackEndAuth | BackEndUser | BackEndCompany | Status;
// type FrontEndUri = FrontEndAuth | FrontEndUser | FrontEndCompany | Status;
