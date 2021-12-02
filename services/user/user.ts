import { parseCookies } from 'nookies'

export const getUserDetail = async () => {
  const cookies = parseCookies()

  const res = await fetch(`${process.env.NEXT_PUBLIC_USER_API}/user/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookies.accessToken}`,
    },
  })
  return await res.json()
}
