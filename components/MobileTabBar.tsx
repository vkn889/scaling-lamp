"use client"

import { TubelightNavBar } from "@/components/ui/tubelight-navbar"
import { Home, BookOpen, Info, Heart } from "lucide-react"

const MOBILE_NAV_ITEMS = [
  { name: "Home",   url: "/",              icon: Home },
  { name: "About",  url: "/#about",        icon: Info },
  { name: "Learn",  url: "/learn",         icon: BookOpen },
  { name: "Donate", url: "/#get-involved", icon: Heart },
]

export function MobileTabBar() {
  return <TubelightNavBar items={MOBILE_NAV_ITEMS} />
}
