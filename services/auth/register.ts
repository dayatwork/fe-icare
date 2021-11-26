import { parseCookies } from 'nookies'

export const register = async ({ identity }: { identity: string }) => {
  const data = {
    identity,
    app: 'icare',
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export const verifyPin = async ({
  identity,
  verification_pin,
}: {
  identity: string
  verification_pin: string
}) => {
  const data = {
    identity,
    verification_pin,
    app: 'icare',
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API}/register/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  return await res.json()
}

export const setNameAndPassword = async ({
  name,
  password,
  email,
}: {
  name: string
  password: string
  email: string
}) => {
  const cookies = parseCookies()
  console.log({ cookies })
  const data = {
    name,
    password,
    email,
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API}/register/detail`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
      body: JSON.stringify(data),
    }
  )
  return await res.json()
}
