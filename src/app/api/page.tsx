import { redirect } from 'next/navigation';
import { getUser } from '../get-user';

async function Page() {
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }
  // ...
  async function action() {
    'use server';
    const user = await getUser();
    if (!user) {
      redirect('/login');
    }
    // ...
  }
  // ...
}
