"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LMSCaseStudy() {
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
        <h1 className="text-4xl font-bold mb-6">Learning Management System Case Study</h1>
        <p className="text-lg text-muted-foreground mb-6">
          It is a case study of this project
        </p>
      </div>
    </div>
  )
}