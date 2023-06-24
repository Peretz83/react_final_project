import { User } from "../interfaces/UserType";

const tokenKey = "token"
const adminKey = "admin"
const userKey = "user"

export function setToken(tokenValue?: string) {
    if (!tokenValue) return;
    localStorage.setItem(tokenKey, tokenValue);
}

export function getToken(): string {
    return localStorage.getItem(tokenKey) || '';
}

export function removeToken() {
    localStorage.removeItem(tokenKey);
}

export function verifyToken(): boolean {
    return getToken().length > 0;
}

export function setAdmin(adminValue?: string) {
    if (!adminValue) return;
    localStorage.setItem(adminKey, adminValue);
}

export function getAdmin() {
   return localStorage.getItem(adminKey) || ""
}

export function verifyAdmin(): boolean {
   return getAdmin().length === 4
}

export function setUser(user: User | null){
    if(user) {
 const stringifyUser = JSON.stringify(user)
    localStorage.setItem(userKey, stringifyUser)
    }
   
}

export function getUser(){
    const user = localStorage.getItem(userKey)
    if(user) {
    const parsedUser = JSON.parse(user)
    return parsedUser
    }

}

export function removeUser(){
    localStorage.removeItem(userKey)
}

export function getBusiness() {
   return localStorage.getItem('user') || ""
  
}