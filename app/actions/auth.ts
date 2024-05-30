'use server';

// default
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// internal
import { createSession, deleteSession } from '@/app/lib/session';

export async function login(username: string) {
  await createSession(username);
  redirect('/dashboard');
}

export async function logout() {
  deleteSession();
  redirect('/login');
}
