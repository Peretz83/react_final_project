export interface User {
  _id?: string;
  admin?: boolean;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  password?: string;
  imageUrl?: string;
  imageAlt?: string;
  state?: string;
  country?: string;
  city?: string;
  street?: string;
  houseNumber?: string;
  zip?: string;
  business?: boolean;
  timestamps?: string;
  error?: string
  message?: string
  token?: string
  err?: string
}