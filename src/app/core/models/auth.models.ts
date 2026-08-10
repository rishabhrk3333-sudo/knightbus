export interface LoginRequest {
  projectName: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
  mobileNo: string;
  projectName: string;
  roleId: number;
  roleName: string;
  isActive: boolean;
  createdOn: string;
}

export interface LoginApiResponse {
  id: number;
  fullName: string;
  email: string;
  mobileNo: string;
  password: string;
  projectName: string;
  roleId: number;
  roleName: string;
  isActive: boolean;
  createdOn: string;
}

