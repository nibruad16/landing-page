'use client'

import { useState } from 'react'
import { ImageUploader } from '@/components/image-uploader'
import { siteConfig } from '@/lib/config'

/**
 * ADMIN PANEL
 * Simple interface to update images and configuration without editing code
 * Access at /admin
 *
 * Note: In production, add proper authentication before exposing this page
 */
export default function AdminPage() {
  const [bookCover, setBookCover] = useState(siteConfig.images.bookCover)
  const [bonusImage, setBonusImage] = useState(siteConfig.images.bonusImage)
  const [savedMessage, setSavedMessage] = useState('')

  const handleBookCoverChange = (url: string) => {
    setBookCover(url)
    // Save to localStorage for persistence (demo purpose)
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookCoverUrl', url)
      setSavedMessage('Book cover updated!')
      setTimeout(() => setSavedMessage(''), 3000)
    }
  }

  const handleBonusImageChange = (url: string) => {
    setBonusImage(url)
    // Save to localStorage for persistence (demo purpose)
    if (typeof window !== 'undefined') {
      localStorage.setItem('bonusImageUrl', url)
      setSavedMessage('Bonus image updated!')
      setTimeout(() => setSavedMessage(''), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600 mb-8">
            Update images and content for your landing page
          </p>

          {/* Success Message */}
          {savedMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              {savedMessage}
            </div>
          )}

          {/* Book Cover Uploader */}
          <div className="mb-8">
            <ImageUploader
              label="Book Cover Image"
              currentImage={bookCover}
              onImageChange={handleBookCoverChange}
            />
            <p className="text-sm text-gray-600 mt-2">
              Recommended size: 400x600px. Formats: JPG, PNG, WebP
            </p>
          </div>

          {/* Bonus Image Uploader */}
          <div className="mb-8">
            <ImageUploader
              label="Bonus Offer Image"
              currentImage={bonusImage}
              onImageChange={handleBonusImageChange}
            />
            <p className="text-sm text-gray-600 mt-2">
              Recommended size: 400x300px. Formats: JPG, PNG, WebP
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              How to use images permanently:
            </h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>
                1. Upload images here to see live preview (stored in browser localStorage)
              </li>
              <li>
                2. To make changes permanent, update .env.local with image URLs:
              </li>
              <li className="ml-4 font-mono bg-white p-2 rounded">
                NEXT_PUBLIC_BOOK_COVER_URL=your-image-url
              </li>
              <li className="ml-4 font-mono bg-white p-2 rounded">
                NEXT_PUBLIC_BONUS_IMAGE_URL=your-image-url
              </li>
              <li>3. Restart your development server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
