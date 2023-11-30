import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Fan Control</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <span>⚡ Electron ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <a className="btn-blue">Go to next page NEXT</a>
        </Link>
        <Link href="/login">
          <a className="btn-blue">Go to next page LOGIN</a>
        </Link>

      </div>
    </React.Fragment>
  )
}
