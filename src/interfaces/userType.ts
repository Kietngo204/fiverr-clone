export interface SignInType {
  email: string;
  password: string;
}

export interface SignUpType extends SignInType {
  name: string;
  phone: number;
}

export interface UserType {
  avatar?: string;
  birthday?: string;
  bookingJob?: any;
  certification?: any;
  email?: string;
  gender?: boolean;
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  role?: string;
  skill?: any;
}
