
import { getToken } from "../auth/TokenManager";
import { Card } from "../interfaces/CardType";
import { User } from "../interfaces/UserType";

const serverUrl = 'http://localhost:3000/'
const usersUrl = `${serverUrl}users/`
const cardsUrl = `${serverUrl}cards/`;

export async function getUsers(): Promise<Array<User>> {
  const res = await fetch(`${usersUrl}`);
  return res.json();
}

export async function signup(user: User): Promise<User> {
  const res = await fetch(`${usersUrl}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return res.json();
}

export async function login(user: User): Promise<User> {
  const res = await fetch(`${usersUrl}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  return res.json();
}

export async function deleteUser(_id: string): Promise<User> {
  const res = await fetch(`${usersUrl}${_id}`, {
    method: "DELETE",
    headers: {
      // 'x-auth-token': getToken()
    },
  });
  return res.json();
}

export async function getCards(): Promise<Array<Card>> {
  const res = await fetch(`${cardsUrl}`);
  return res.json();
}

export async function addCard(card: Card): Promise<Card> {
  const res = await fetch(`${cardsUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'x-auth-token': getToken()
    },
    body: JSON.stringify(card),
  });
  return res.json();
}

export async function getCardsById(_id: string): Promise<Array<Card>> {
  const res = await fetch(`${cardsUrl}mycards/${_id}`, {
    headers: {
      // 'x-auth-token': getToken()
    }
  });
  return res.json();
}

export async function getCardById(_id: string): Promise<Card> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    headers: {
      // 'x-auth-token': getToken()
    }
  });
  return res.json();
}

export async function editCards(_id: string, card: Card): Promise<Card> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // 'x-auth-token': getToken()
    },
    body: JSON.stringify(card),
  });
  return res.json();
}

export async function deleteCard(_id: string): Promise<Card> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    method: "DELETE",
    headers: {
      // 'x-auth-token': getToken()
    },
  });
  return res.json();
}