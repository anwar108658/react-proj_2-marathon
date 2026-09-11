import type { ReactElement } from "react"

const Container = ({children}: { children: ReactElement }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
  )
}

export default Container