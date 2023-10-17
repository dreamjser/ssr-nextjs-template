
import React, { ReactNode } from 'react'

export default function RootLayout({
    children,
    header,
    nav,
  }: {
    children: ReactNode,
    header: ReactNode,
    nav: ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {header}
          {nav}
          {children}
        </body>
      </html>
    )
  }
