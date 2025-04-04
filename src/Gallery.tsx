import React, { useState, useEffect, useRef } from 'react';
import { Video, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  isAdmin: boolean;
  videos: Array<{ id: string; url: string; title: string }>;
  onDeleteVideo: (id: string) => void;
  onUploadVideo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Gallery: React.FC<GalleryProps> = ({ isAdmin, videos, onDeleteVideo, onUploadVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Reset video state when modal closes
  useEffect(() => {
    if (!isModalOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsLoading(false);
    }
  }, [isModalOpen]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
    setIsModalOpen(true);
    setIsLoading(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  };

  const handleNextVideo = () => {
    if (selectedVideo !== null && selectedVideo < videos.length - 1) {
      setIsLoading(true);
      setSelectedVideo(selectedVideo + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (selectedVideo !== null && selectedVideo > 0) {
      setIsLoading(true);
      setSelectedVideo(selectedVideo - 1);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setIsLoading(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        handleNextVideo();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousVideo();
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedVideo]);

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Work Gallery</h2>
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className="relative group cursor-pointer"
            onClick={() => handleVideoClick(index)}
          >
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <video
                src={video.url}
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Video className="h-12 w-12 text-white" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600 truncate">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              <video
                ref={videoRef}
                src={videos[selectedVideo].url}
                controls
                className="w-full h-full"
                onLoadedData={handleVideoLoad}
                playsInline
              />

              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={handlePreviousVideo}
                  className={`p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity ${
                    selectedVideo === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={selectedVideo === 0}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={handleNextVideo}
                  className={`p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity ${
                    selectedVideo === videos.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={selectedVideo === videos.length - 1}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </div>

            {/* Video Title */}
            <p className="mt-4 text-white text-center text-lg font-medium">
              {videos[selectedVideo].title}
            </p>

            {/* Video Counter */}
            <p className="mt-2 text-gray-400 text-center text-sm">
              {selectedVideo + 1} / {videos.length}
            </p>
          </div>
        </div>
      )}

      {/* Video Gallery */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">Video Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <video
                src={video.url}
                controls
                className="w-full h-48 object-cover rounded-lg"
                title={video.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 