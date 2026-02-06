'use client'

import React from "react"

import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageUploaderProps {
  onImageChange: (imageUrl: string) => void
  currentImage: string
  label?: string
}

/**
 * Image Uploader Component
 * Allows users to upload or input image URLs
 * Perfect for updating book cover, testimonial images, etc.
 */
export function ImageUploader({
  onImageChange,
  currentImage,
  label = 'Upload Image',
}: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState(currentImage)
  const [isInputMode, setIsInputMode] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(currentImage)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const url = event.target?.result as string
        setImageUrl(url)
        setPreviewUrl(url)
        onImageChange(url)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUrlSubmit = (url: string) => {
    if (url.trim()) {
      setImageUrl(url)
      setPreviewUrl(url)
      onImageChange(url)
      setIsInputMode(false)
    }
  }

  const clearImage = () => {
    setImageUrl('')
    setPreviewUrl('')
    onImageChange('')
  }

  return (
    <div className="w-full border border-gray-300 rounded-lg p-6 bg-gray-50">
      <label className="block text-sm font-semibold text-gray-700 mb-4">
        {label}
      </label>

      {previewUrl ? (
        <div className="mb-4 relative">
          <img
            src={previewUrl || "/placeholder.svg"}
            alt="Preview"
            className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : null}

      <div className="flex flex-col gap-3">
        {!isInputMode ? (
          <>
            <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
              <div className="flex items-center gap-2 text-blue-600">
                <Upload className="w-5 h-5" />
                <span className="text-sm font-medium">Click to upload image</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={() => setIsInputMode(true)}
              className="text-sm text-blue-600 hover:text-blue-700 underline text-center"
            >
              Or paste image URL
            </button>
          </>
        ) : (
          <>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => handleUrlSubmit(imageUrl)}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Apply
              </Button>
              <Button
                onClick={() => setIsInputMode(false)}
                size="sm"
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
