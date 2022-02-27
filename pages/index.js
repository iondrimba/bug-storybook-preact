import Link from 'next/link'
import { Button } from '../stories/Button'

export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
				<Button  size='large' label='Butto'/>
        <li>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
