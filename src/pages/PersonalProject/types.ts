export interface UserInfo {
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

export interface PersonalProjectWrapperProps {
  initialData: Array<UserInfo>;
}
