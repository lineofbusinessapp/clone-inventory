"use client"

import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'

export default function Sidebar() {
    const inventoryLinks = [
        {
            title: "Items",
            href: "/dashboard/inventory/items/new"
        },
        {
            title: "Categories",
            href: "/dashboard/inventory/categories/new"
        },
        {
            title: "Brands",
            href: "/dashboard/inventory/brands/new"
        },
        {
            title: "Units",
            href: "/dashboard/inventory/units/new"
        },
        {
            title: "Warehouse",
            href: "/dashboard/inventory/warehouse/new"
        },
        {
            title: "Inventory Adjustments",
            href: "/dashboard/inventory/adjustments"
        }
    ]
    const salesLinks = [
        {
            title: "Customers",
            href: "/dashboard/sales/items"
        },
        {
            title: "Sales Orders",
            href: "/dashboard/sales/itemgroups"
        },
        {
            title: "Packages",
            href: "/dashboard/sales/adjustments"
        },
        {
            title: "Invoices",
            href: "/dashboard/sales/adjustments"
        },
        {
            title: "Sales Receipts",
            href: "/dashboard/sales/adjustments"
        },
        {
            title: "Payments Received",
            href: "/dashboard/sales/adjustments"
        },
        {
            title: "Sales Returns",
            href: "/dashboard/sales/adjustments"
        },
        {
            title: "Credit Note",
            href: "/dashboard/sales/adjustments"
        }
    ]
    return (
        <div className='w-60 min-h-screen bg-slate-800 text-slate-50 fixed'>
            {/* Top Part*/}
            <div className='flex flex-col'>
                {/* Logo */}
                <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                    <ShoppingCart />
                    <span className='text-xl font-semibold'>Inventory</span>
                </Link>
                {/* Links */}
                <nav className='flex flex-col gap-3 px-3 py-6'>
                    <Link href="" className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'>
                        <Home className='w-4 h-4' />
                        <span>Home</span>
                    </Link>
                    <SidebarDropdownLink title="Inventory" items={inventoryLinks} icon={BaggageClaim}/>
                    <SidebarDropdownLink title="Sales" items={salesLinks} icon={ShoppingBasket}/>

                    <button href="" className='p-2 flex items-center space-x-2'>
                        <BaggageClaim className='w-4 h-4' />
                        <span>Inventory</span>
                    </button>
                    <button href="" className='p-2 flex items-center space-x-2'>
                        <ShoppingBasket className='w-4 h-4' />
                        <span>Sales</span>
                    </button>
                    <button href="" className='p-2 flex items-center space-x-2'>
                        <ShoppingBag className='w-4 h-4' />
                        <span>Purchases</span>
                    </button>
                    <button href="" className='p-2 flex items-center space-x-2'>
                        <Cable className='w-4 h-4' />
                        <span>Intergrations</span>
                    </button>
                    <button href="" className='p-2 flex items-center space-x-2'>
                        <BarChart4 className='w-4 h-4' />
                        <span>Reports</span>
                    </button>
                    <button href="" className='p-2 flex items-center space-x-2'>
                        <Files className='w-4 h-4' />
                        <span>Documents</span>
                    </button>
                </nav>
                <SubscriptionCard />
            </div>
            {/* Bottom */}
            <div className="flex flex-col">
                <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
                    <ChevronLeft />
                </button>
            </div>
            {/* Subscription Card */}
            {/* Footer Icon */}
        </div>
    )
}
