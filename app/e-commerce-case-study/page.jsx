"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EcommerceCaseStudy() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">E-Commerce Platform Case Study</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground">
              A full-featured e-commerce platform built with Next.js and Redux, offering comprehensive authentication and seamless payment integration through Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Secure User Authentication</li>
              <li>Product Management System</li>
              <li>Shopping Cart Functionality</li>
              <li>Stripe Payment Integration</li>
              <li>Order Management System</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Frontend: Next.js, Redux</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: MongoDB</li>
              <li>Payment: Stripe Integration</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}