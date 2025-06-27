"use client"

import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Inventory() {
  const options = [
    {
      title: "Item Groups",
      description: "Create standalone items and services that tyo buy and sell",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Items",
      description: "Create standalone items and services that tyo buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Composite Items",
      description: "Create standalone items and services that tyo buy and sell",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: false,
      icon: Component,
    },
    {
      title: "Prices List",
      description: "Create standalone items and services that tyo buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: false,
      icon: ScrollText,
    }
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
        {
          options.map((card, i) => {
            return (
              <OptionCard optionData={card} key={i} />

            )
          })
        }
      </div>
    </div>
  )
}
